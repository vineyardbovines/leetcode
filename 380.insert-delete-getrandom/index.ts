class RandomizedSet {
    private values: number[];
    private valueToIndex: Map<number, number>;

    constructor() {
        this.values = [];
        this.valueToIndex = new Map();
    }

    insert(val: number): boolean {
        if (this.valueToIndex.has(val)) {
            return false;
        }

        this.values.push(val);
        this.valueToIndex.set(val, this.values.length - 1);
        return true;
    }

    remove(val: number): boolean {
        if (!this.valueToIndex.has(val)) {
            return false;
        }

        const indexToRemove = this.valueToIndex.get(val)!;
        const lastValue = this.values[this.values.length - 1];

        this.values[indexToRemove] = lastValue;
        this.valueToIndex.set(lastValue, indexToRemove);

        this.values.pop();
        this.valueToIndex.delete(val);

        return true;
    }

    getRandom(): number {
        const randomIndex = Math.floor(Math.random() * this.values.length);
        return this.values[randomIndex];
    }
}
