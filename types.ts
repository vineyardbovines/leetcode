export class ListNode {
    val: number
    next: ListNode | null
    random: ListNode | null;

    constructor(val?: number, next?: ListNode | null, random?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
        this.random = random ?? null;
    }
}

