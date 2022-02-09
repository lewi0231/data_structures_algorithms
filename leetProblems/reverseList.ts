import { List, Node } from "../dataStructures/LinkedList";

const reverseList = (head: Node | null): Node | null => {
  if (head === null || head.next === null) {
    return head;
  }
  const p = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return p;
};

const list = new List();
list.insertBegin(8);
list.insertBegin(4);
list.insertBegin(1);
list.insertEnd(13);
list.insertEnd(21);
list.print();
console.log();
list.head = reverseList(list.head);
list.print();
