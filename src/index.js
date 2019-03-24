// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {


    let exchangeResult = {};
    exchangeResult.H; // worth 50¢
    exchangeResult.Q; // worth 25¢
    exchangeResult.D; // worth 10¢
    exchangeResult.N; // worth 5¢
    exchangeResult.P; // worth 1¢

    if (currency <= 0) {
        return exchangeResult;
    }

    if (currency > 10000) {
        return { "error": "You are rich, my friend! We don't have so much coins for exchange" };
    }

    if (currency >= 50) {
        exchangeResult.H = 0;
    }

    for (let i = 50; i <= currency;) {
        exchangeResult.H++;
        currency -= i;
    }

    if (currency >= 25) {
        exchangeResult.Q = 0;
    }

    for (let i = 25; i <= currency;) {
        exchangeResult.Q++;
        currency -= i;
    }

    if (currency >= 10) {
        exchangeResult.D = 0;
    }

    for (let i = 10; i <= currency;) {
        exchangeResult.D++;
        currency -= i;
    }

    if (currency >= 5) {
        exchangeResult.N = 0;
    }

    for (let i = 5; i <= currency;) {
        exchangeResult.N++;
        currency -= i;
    }

    if (currency >= 1) {
        exchangeResult.P = 0;
    }

    for (let i = 1; i <= currency;) {
        exchangeResult.P++;
        currency -= i;
    }

    return exchangeResult;
}
