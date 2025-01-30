function maxProfit(prices: number[]): number {
    let total: number = 0;
    for (let i: number = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            total += prices[i] - prices[i - 1];
        }
    }
    return total;
};
