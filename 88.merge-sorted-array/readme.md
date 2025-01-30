# 88. Merge Sorted Array

[ref](https://leetcode.com/problems/merge-sorted-array)

## intuition

- we have empty space at the end of nums1, we can avoid overwriting elements by working backwards
- place larger elements at the end first, will never lose original elements in nums1

## approach

- 3 points: last actual element in nums1, last actual in nums2, last position in nums1
- compare them moving backwards
- if nums2 element is larger (or nums1 is exhausted), place nums2 in element-- otherwise, place nums1
- move pointers backwards

## complexity

- time: 0(m+n), single pass through both arrays
- space: 0(1): modifying nums in place, always using 3 pointers
