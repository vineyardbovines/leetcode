import { ListNode } from "../types";

function copyRandomList(head: ListNode | null): ListNode | null {
  if (!head) return null;

  let temp: ListNode | null = head;
  while (temp) {
    const copy = new ListNode(temp.val, temp.next, null);
    temp.next = copy;
    temp = copy.next;
  }

  temp = head;
  while (temp) {
    if (temp.random) {
      temp.next!.random = temp.random.next;
    }
    temp = temp.next!.next;
  }

  const dummy = new ListNode(-1);
  let copyTail: ListNode | null = dummy;
  temp = head;
  while (temp) {
    copyTail.next = temp.next;
    copyTail = copyTail.next!;
    temp.next = temp.next!.next;
    temp = temp.next;
  }

  return dummy.next;
}
