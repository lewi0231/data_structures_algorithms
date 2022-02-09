import { List, Node } from "../dataStructures/LinkedList";

const print = (head: Node | null): number[] => {
  const result = [];
  while (head !== null) {
    result.push(head.val);
    head = head.next;
  }
  return result;
};

// This merges two sorted list into a combined sorted list - O(n + m)
const mergeTwoLists = (list1: Node | null, list2: Node | null): Node | null => {
  const prehead: Node | null = new Node(0);
  let prev = prehead;

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      prev.next = list1;
      prev = prev.next;
      list1 = list1.next;
    } else if (list2.val < list1.val) {
      prev.next = list2;
      prev = prev.next;
      list2 = list2.next;
    }
  }

  prev.next = list1 === null ? list2 : list1;

  return prehead.next;
};

const list = new List();

list.insertBegin(41);
list.insertBegin(14);
list.insertBegin(4);

const list2 = new List();
list2.insertBegin(88);
list2.insertBegin(21);
list2.insertBegin(1);

const result = mergeTwoLists(list.head, list2.head);

console.log(print(result));
