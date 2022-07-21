Moralis.Cloud.job("cacheSubmissionWeekly", async (request) => {

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const lastSunday = new Date(today.setDate(today.getDate() - today.getDay()));

    const Results = Moralis.Object.extend("Results");
    const resultsQuery = new Moralis.Query(Results);
    resultsQuery.equalTo("startDate", lastSunday);
    const results = await resultsQuery.find();
    if(results.length > 0) return false;

    const Submissions = Moralis.Object.extend("Submissions");
    const query = new Moralis.Query(Submissions);
    query.greaterThan("updatedAt", lastSunday);
    const submissions = await query.find();

    const resultsAggregate = submissions.reduce((acc, submission) => {
        submission.get('allocations').forEach(allocation => {
            acc[allocation.token] = (acc[allocation.token] || 0) + allocation.allocation;
        })
        return acc;
    }, {});

    const resultsNormalized = Object.keys(resultsAggregate).reduce((acc, token) => {
        acc[token] = resultsAggregate[token] / submissions.length;
        return acc;
    }, resultsAggregate);

    const Result = Moralis.Object.extend("Results");
    const result = new Result();
    result.set("submissions", submissions.length);
    result.set("startDate", lastSunday);
    result.set("results", resultsNormalized);
    await result.save();

    return true;
});
