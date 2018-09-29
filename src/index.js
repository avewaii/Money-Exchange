// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    const coins = [ 50, 25, 10, 5, 1 ];
    const labels = [ 'H', 'Q', 'D', 'N', 'P' ];
    const result = {};

    if (currency > 10000) {
        return { 
            error: "You are rich, my friend! We don't have so much coins for exchange"
        };
    }

    let currentCoinIndex = 0;
    while (currency > 0) {
        let remainder = currency - coins[currentCoinIndex];
        if (remainder >= 0) {
            currency = remainder;
            
            // remember coin
            if (result[labels[currentCoinIndex]]) {
                ++result[labels[currentCoinIndex]];
            } else {
                result[labels[currentCoinIndex]] = 1;
            }
        } else {
            ++currentCoinIndex;
        }
    }

    return result;
}
