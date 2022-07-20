// Moralis.Cloud.afterSave("Tokens", async (request) => {
//     const symbol = request.object.get('symbol');
//     const tokenMetadata = await Moralis.Web3API.token.getTokenMetadataBySymbol({
//         symbols: symbol
//     });
// });

Moralis.Cloud.job("getTokenPrices", async (request) => {

    const Tokens = Moralis.Object.extend("Tokens");
    const query = new Moralis.Query(Tokens);
    query.equalTo("included", true);
    const tokens = await query.find();

    const cmcIds = tokens.map(token => token.get("cmcId")).join(",");
    const data = await Moralis.Cloud.httpRequest({
        url: `https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?id=${cmcIds}`,
        headers: {
            'Content-Type': 'application/json',
            'X-CMC_PRO_API_KEY': "7673b1d5-3a2c-4a8a-8794-c39e6ae14e5e",
        },
    })

    for(let token of tokens) {
        const price = data.data.data[token.get("cmcId").toString()].quote.USD.price;
        token.set("price", price);
        await token.save();
    }

    return true;
    
})