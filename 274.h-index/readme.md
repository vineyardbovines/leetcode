# 274. H-Index

[ref](https://leetcode.com/problems/h-index)

## intuition

- h-index is the max number of h where the researcher has at least h papers with h or more citations
- by sorting the citations array, we can find the point where the number of remaining papers is <= number of citations at that point


## approach

- sort the citations array in ascending order
- for each position, calculate how many papers are left
- if current citation count is >= number of papers left, we've found the h index

## complexity

time: 0(n log n) for the sorting
space: 0(1) for modifying in place
