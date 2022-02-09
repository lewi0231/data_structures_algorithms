class ListNode {
  val: number | null;
  next: ListNode | null;
  prev: ListNode | null;
  constructor(val?: number) {
    this.val = val || null;
    this.next = null;
    this.prev = null;
  }
}

export class DoublyLinkedList {
  sentinel: ListNode = new ListNode();
  constructor() {
    this.sentinel.next = this.sentinel;
    this.sentinel.prev = this.sentinel;
  }

  insertBegin(val: number) {
    const node = new ListNode(val);
    if (this.sentinel.next === this.sentinel) {
      this.sentinel.prev = node;
    }
    node.next = this.sentinel.next;
    node.prev = this.sentinel;
    this.sentinel.next = node;
  }

  print() {
    let current = this.sentinel;

    while (current.next !== this.sentinel) {
      console.log(current.next.val);
      current = current.next;
    }
  }
}

const list = new DoublyLinkedList();

list.insertBegin(6);
list.insertBegin(61);
list.insertBegin(16);

console.log(list.print());
