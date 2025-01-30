# 27. Remove Array Element 

[ref](https://leetcode.com/problems/remove-element/)

## intuition 

- 2 pointers: 1 for iterating and 1 for keeping track

## approach

- iterate over using the index
- when we find an element not equal to 'val':
- copy element to the position indicated by our other pointer
- increment the iteration index for checking the next valid element


## complexity

- time: O(n), we iterate over the array once
- space: 0(1), operation is done in place
