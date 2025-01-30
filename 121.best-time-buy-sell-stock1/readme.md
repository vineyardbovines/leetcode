# 121. Best Time to Buy and Sell Stock

[ref](https://leetcode.com/problems/best-time-to-buy-and-sell-stock)

## intuition

- max. profit can be found by keeping track of lowest price seen so far and checking if selling at today's price would give us a better profit
- e.g. 'what if i had bought at the lowest price i've seen and sold today'

## approach

- 2 variables to track: lowest price seen so far and best profit possible form any buy/sell combo
- for each price in the array, if current price is lower than minPrice, update it
- if selling at current price gives us better profit than maxProfit, update it

## complexity

**time**: 0(n)

- single pass through array and each operation is 0(1)

**space**: 0(1)

- always 2 variables
