function longestConsecutive(nums: number[]): number {
    const l = nums.length;
    if (!l) { return 0; }
    if (l === 1) { return 1; }

    const numsSet = new Set(nums);

    const seqStarters = [];

    for (const num of numsSet) {
        const prevNum = num - 1;
        const nextNum = num + 1;
        if (!numsSet.has(prevNum) && numsSet.has(nextNum)) {
            seqStarters.push(num);
        }
    }

    let longestSeq = 1;

    for (const startNum of seqStarters) {
        let seq = 1;
        let nextNum = startNum + 1;
        while (numsSet.has(nextNum)) {
            seq++;
            nextNum++;
        }
        if (seq > longestSeq) {
            longestSeq = seq;
        }
    }

    return longestSeq;
};
