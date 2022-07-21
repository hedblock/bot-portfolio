Moralis.Cloud.job("getTokenPrices", async (request) => {

    const config = await Moralis.Config.get({useMasterKey: true});
    const CMC_API_KEY = config.get("CMC_API_KEY");

    const Tokens = Moralis.Object.extend("Tokens");
    const query = new Moralis.Query(Tokens);
    query.equalTo("included", true);
    const tokens = await query.find();

    const cmcIds = tokens.map(token => token.get("cmcId")).join(",");
    const data = await Moralis.Cloud.httpRequest({
        url: `https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?id=${cmcIds}`,
        headers: {
            'Content-Type': 'application/json',
            'X-CMC_PRO_API_KEY': CMC_API_KEY,
        },
    })

    for(let token of tokens) {
        const price = data.data.data[token.get("cmcId").toString()].quote.USD.price;
        token.set("price", price);
        await token.save();
    }

    return true;
    
})