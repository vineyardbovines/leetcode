# 26. Remove Duplicates Form Sorted Array

[ref](https://leetcode.com/problems/remove-duplicates-from-sorted-array)

## approach

- use index to place unique elements in their correct position
- loop over the array by the index and compare to the previous
- if current element is diff from previous, copy it to index position and increment
- return index as the length of modified array

## complexity

- time: 0(n), only iterating once
- space: 0(1), operation is done in place
