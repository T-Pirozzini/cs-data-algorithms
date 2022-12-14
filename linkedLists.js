// credit to bananabread08 - revisit this later for more understanding

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.nextNode = next;    
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;    
  }

  getHead() {
    return this.head;
  }

  getTail() {
    if (!this.head) return null;
    let tail = this.head;
    while (tail.next !== null) {
      tail = tail.next;
    }
    return tail;
  }

  size() {
    let count = 0;
    let pointer = this.head;
    while (pointer !== null) {
      count++;
      pointer = pointer.next;
    }
    return count;
  }
  
  append(value) {
    if (!this.head) {
      this.head = new Node(value);
      return this;
    };
    let tail = this.getTail();
    tail.next = new Node(value);
    return tail;        
  };

  prepend(value) {
    if (!this.head) {
      this.head = new Node(value);
      return this;
    };
    const prevHead = this.head;
    this.head = new Node(value, prevHead);
  };

  at(index) {
    if (!this.head) return null;
    let pointer = this.head;
    for (let i = 0; i < index; i++) {
      pointer = pointer.next;
    }
    return pointer ? pointer : null;
  }

  pop() {
    // empty list
    if (!this.head) return null;
    // one node list
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let pointerBeforeTail = this.at(this.size() - 2);
    pointerBeforeTail.next = null;
    return this.head;
  };

  containes(value) {
    if (!this.head) return null;
    let pointer = this.head;
    while (pointer.next !== null) {
      if (pointer.value === value) return true;
      pointer = pointer.next;
    }
    // checker for tail
    return pointer.value === value ? true : false;
  };

  find(value) {
    if (!this.head) return null;
    let pointer = this.head;
    let count = 0;
    while (pointer.next !== null) {
      if (pointer.value === value) return count;
      pointer = pointer.next;
      count++;
    }
    // checker for tail
    if (pointer.value === value) return count;
    return null;
  }

  toString() {
    if (!this.head) return '(null)';
    let str = '';
    let pointer = this.head;
    while (pointer.next !== null) {
      str = `${str} (${pointer.value}) ->`;
      pointer = pointer.next;
    }
    // concat tail + null
    return `${str} (${pointer.value}) -> (null)`;
  }
};


const list = new LinkedList();
list.prepend(2);
// list.append(1);
// list.append(3);
// list.append(4);
list.pop();
list.pop();

// TESTS
console.log(list.size()); // 2, since we popped 2 nodes

console.log(list.getHead()); //Node { value: 2, next: Node { value: 1, next: null } }

console.log(list.getTail()); // Node { value: 1, next: null }

console.log(list.at(1)); // Node { value: 1, next: null }

// console.log(list.contains(0)); // false, no Node with value = 0

console.log(list.find(2)); // value 2 is at 1st Node => index 0;

console.log(list.toString()); // (2) -> (1) -> (null)