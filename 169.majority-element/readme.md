# 169. Majority Element

[ref](https://leetcode.com/problems/majority-element/)


## intuition

- if a majority element exists, it will always survive the count process
- when we hit different elements, they'll pair up and cancel out via the count
- but majority element appears so frequently that it can't be completely canceled out
 
## approach

- boyer-moore algo
- 2 variables: 1 to store potential majority element, 1 to track how many times we've seen a candidate - times we've seen other elements
- iterate through array, increment if current number matches candidate, decrement if differs
- surviving candidate has to be the majority element
 
## complexity

- time: 0(n), single pass through array and all operations inside loop are 0(1)
- space: 0(1), always use 2 variables

