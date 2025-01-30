# 189. Rotate Array

[ref](https://leetcode.com/problems/rotate-array/)

## intuition

- instead of rotating one element at a time, split the array at the rotation point and rearrange it all at once
- rotating by k positions is the same as taking the last k elements and moving them to the front

## approach

- modulus gives us the rotation needed (e.g. rotating 5 positions in an array of length 3 is the same as rotating by 2 positions)
- splice cuts off last k elements from array
- unshift places the elements at the start of the array

## complexity

- time: 0(n), combined operation touches each element once
- space: 0(k), temporarily stores k elements during splice/unshift
