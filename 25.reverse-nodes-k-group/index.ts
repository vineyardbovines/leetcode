import { ListNode } from "../types";

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (!head || k <= 1) return head;
  let preC = k;
  let preT = head;
  let cnt = 0;
  while (preT && preC > 0) {
    preT = preT.next;
    preC--;
    cnt++;
  }
  if (cnt < k) return head;
  let th = head;
  let rh = null;
  let t = head;
  let c = k;
  while (head && c > 0) {
    t = head;
    head = head.next;
    t.next = rh;
    rh = t;
    c--;
  }
  let sh = reverseKGroup(head, k);
  th.next = sh;
  return rh;
};
