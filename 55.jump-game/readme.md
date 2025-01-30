# 55. Jump Game

[ref](https://leetcode.com/problems/jump-game)

## intuition

- instead of tracking all possible jumps, only track the furthest we can reach from our current position

## approach

- keep track of remaining jump power (left) that represents how far we can still jump
- in iteration, decrease jump power by 1 with each step
- at each position, use remaining old jump power or new jump power at current position, taking whichever is larger

## complexity

- time: 0(n), only iterate once
- space: 0(1), only use 1 variable
