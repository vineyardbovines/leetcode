function merge(intervals: number[][]): number[][] {
    intervals.sort((a, b) => a[0] - b[0])
    let res = [], n = intervals.length, i = 0;
    while (i < n) {
        let tmp = [intervals[i][0]], max = intervals[i][1];
        i++;
        while (i < n && max >= intervals[i][0]) {
            if (intervals[i][0] < tmp[0]) tmp[0] = intervals[i][0];
            max = Math.max(intervals[i][1], max)
            i++;
        }
        tmp.push(max);
        res.push(tmp);
    }
    return res;
};
