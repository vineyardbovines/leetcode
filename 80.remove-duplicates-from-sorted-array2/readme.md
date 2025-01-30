# 80. Remove Duplicates From Array II

[ref](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/)

## intuition

- array is already sorted, duplicates are adjacent
- 2 pointers: 1 for iterating through the array and another to track the position of the next valid element

## approach

- iterate by array index
- use current to place valid elements at current position
- make variable to keep track of duplicates, if element <= 1 put element in its position
- current indicates the length of the modified array

## complexity

- time: O(n), we iterate over the array once
- space: 0(1), operation is done in place
