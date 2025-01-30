# 45. Jump Game II

[ref](https://leetcode.com/problems/jump-game-ii)

## intuition

- count the minimum jumps needed
- track the furthest position we can reach considering all positions
- track the current jump boundary, when reached a new jump is required
- only need to iterate to length-1 since we don't need to jump from the last position

## approach

- update maxDistance by checking if we can jump further from index position
- when we reach current jump boundary, increment jumps
- set new boundary to the max distance (furthest we can reach)

## complexity

-time: 0(n), length of the array
-space: 0(1), only 3 variables
