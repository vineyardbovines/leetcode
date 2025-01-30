function jump(nums: number[]): number {
    let jumps = 0;
    let maxDistance = 0;
    let curPos = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        maxDistance = Math.max(maxDistance, i + nums[i]);

        if (i === curPos) {
            jumps++;
            curPos = maxDistance;
        }
    }

    return jumps;
}
