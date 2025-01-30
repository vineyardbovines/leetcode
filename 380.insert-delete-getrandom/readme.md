# 380. Insert Delete GetRandom O(1)

[ref](https://leetcode.com/problems/insert-delete-getrandom-o1/)

## intuition

- for 0(1) for all operations, we need quick lookups, insertions/removals, ability to get random numbers
- combine an array for random access with a hash map for quick lookups

## approach

- 2 structures: array to store actual values and hashmap to store value-to-index mappings
- for insertion:
  - check if value exists in map
  - if not add it to the end of the array and update map with new index
- for removal:
  - find index of value using map
  - swap with last element in array
  - update map for swapped element
  - remove last element and update
- for getting random:
  - generate random index and return element at that index

## complexity

- time: 0(1),all inner functions are 0(1)
- space: 0(n) where n is number of elements being stored twice

