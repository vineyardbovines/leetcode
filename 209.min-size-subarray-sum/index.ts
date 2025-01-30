function minSubArrayLen(target: number, nums: number[]): number {
    if (!nums.length) {
        return 0;
    }
    let start = 0;
    let end = 0;
    let cur = 0;
    let length = Infinity;
    while (end < nums.length) {
        cur += nums[end];
        while (cur >= target) {
            length = Math.min(length, end - start + 1);
            cur -= nums[start];
            start += 1;
        }
        end += 1;
    }
    return length === Infinity ? 0 : length;
};
