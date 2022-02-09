// Insertion at the beginning of the list is O(1)

export class Node {
  next: Node | null;
  val: number;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

/***
 * List is a Singly LinkedList data structure
 * insertEnd = O(n), insertBegin = O(1), print = O(n)
 */
export class List {
  head: Node | null;
  size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertEnd(val: number) {
    if (this.head === null) {
      this.head = new Node(val);
      return;
    }

    const traversal = (node: Node | null): Node => {
      if (node === null) {
        node = new Node(val);
      } else {
        node.next = traversal(node.next);
      }
      return node;
    };

    traversal(this.head);
  }

  insertBegin(val: number) {
    if (this.head === null) {
      this.head = new Node(val);
    } else {
      const node = new Node(val);
      node.next = this.head;
      this.head = node;
    }
  }

  // This only deletes the first Node encountered with value = val
  delete(val: number) {
    if (this.head !== null && this.head.val === val) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;

    while (current !== null && current.next !== null) {
      if (current.next.val === val) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
  }

  // Pos is zero-indexed
  insertPos(val: number, pos: number) {
    const node = new Node(val);

    if (this.head === null) {
      this.head = node;
      return;
    }
    if (pos === 0) {
      node.next = this.head;
      this.head = node;
      return;
    }
    let current = this.head;

    while (current.next !== null && pos > 0) {
      current = current.next;
      pos--;
    }

    node.next = current.next;
    current.next = node;
  }

  search(val: number) {
    const traverse = (node: Node | null): boolean => {
      if (node === null) {
        return false;
      }
      if (node.val === val) {
        return true;
      }
      return traverse(node.next);
    };
    return traverse(this.head);
  }

  print() {
    const result = [];
    let current = this.head;
    while (current !== null) {
      result.push(current.val);
      current = current.next;
    }
    console.log(result.join(" "));
  }
}

// Testing
// const list = new List();
// list.insertEnd(88);
// list.insertBegin(99);
// list.insertBegin(12);
// list.insertBegin(63);
// list.insertEnd(100);
// list.insertPos(44, 0);
// list.print();
// list.delete(99);
// console.log("99 deleted from list:");
// list.print();
// console.log("900 in list? ", list.search(900));
// console.log("88 in list? ", list.search(88));
// list.print();
