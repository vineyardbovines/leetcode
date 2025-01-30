# 122. Best Time to Buy and Sell Stock II

[ref](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)
$$
## intuition

- peak/valley approach where we collect every upward slope in the price graph
- instead of looking for a single buy/sell pair, capture every profitable price increase
- if tomorrow's price is higher than todays, we can profit by buying today and selling tomorrow

## approach

- track total profit accumulated from all profitable trades
- compare each price with the previous day
- if it increased, add the difference to the total (buy yesterday, sell today)
- if it decreased, do nothing (we don't buy to lose money)

## complexity

- time: 0(n), single pass through array and comparisons are 0(1)
- space: 0(1), only 1 variable
