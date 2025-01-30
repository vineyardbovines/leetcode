function removeDuplicates(nums: number[]): number {
    let count = 0
    let current = 1

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            count = 0;
            nums[current++] = nums[i]
        } else {
            count++
            if (count <= 1) nums[current++] = nums[i]
        }
    }

    return current;
};
