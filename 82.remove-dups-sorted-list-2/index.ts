import { ListNode } from "./types"

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head) { return null }
    if (!head.next) { return head }
    let fakeHead = new ListNode(undefined, head)
    let prev = fakeHead
    let current = head

    while (current) {
        while (current.next && prev.next && prev.next.val === current.next.val) { current = current.next }

        if (prev.next === current) {
            prev = prev.next
        } else {
            prev.next = current.next
        }

        current = current.next as ListNode
    }

    return fakeHead.next
}
