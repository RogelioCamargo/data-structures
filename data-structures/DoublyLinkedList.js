class Node {
  constructor(data) {
    this.data = data;
    this.prev = null; 
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  unshift(data) {
    let newNode = new Node(data);

    if (!this.head && !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let oldHeadNode = this.head;
      this.head.prev = newNode; 
      this.head = newNode;
      newNode.next = oldHeadNode;
    }

    this.size++;
  }

  push(data) {
    let newNode = new Node(data);

    if (!this.head && !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let oldTailNode = this.tail; 
      this.tail.next = newNode;
      this.tail = newNode;
      newNode.prev = oldTailNode;
    }

    this.size++;
  }

  insertAt(data, index) {
    if (index < 0 && index > this.size) return null; 

    if (index === 0) this.unshift(data);
    else if (index === this.size) this.push(data);
    else {
      let newNode = new Node(data);

      let current = this.head;
      // if you're inserting at index 1 and size is 2,
      // then you need the node at index 0.
      // so in reality, you're actually searching for index: index - 1
      index--;

      while (index > 0) {
        current = current.next;
        index--;
      }

      newNode.prev = current;  
      let linkNode = current.next;
      current.next = newNode;
      newNode.next = linkNode;
      linkNode.prev = newNode;

      // in else statement because other branches
      // call methods that do this already
      this.size++;
    }
  }

  shift() {
    if (!this.head) return;

    let removedNode;
    if (!this.head.next) {
      removedNode = this.head;
      this.head = null;
      this.tail = null;
    } else {
      removedNode = this.head;
      this.head = this.head.next;
    }

    this.size--;
    return removedNode.data;
  }

  pop() {
    if (!this.tail) return;

    let removedNode;
    if (!this.head.next) {
      removedNode = this.head;
      this.head = null;
      this.tail = null;
    } else {
      let current = this.head;
      while (current.next.next) {
        current = current.next;
      }
      removedNode = current.next;
      current.next = null;
      this.tail = current;
    }

    this.size--;
    return removedNode.data;
  }

  removeAt(index) {
    if (index <= 0) return this.shift();
    else if (index >= this.size - 1) return this.pop();
    else {
      let current = this.head;
      // if you're inserting at index 1 and size is 2,
      // then you need the node at index 0.
      // so in reality, you're actually searching for index: index - 1
      index--;

      while (index > 0) {
        current = current.next;
        index--;
      }

      let removedNode = current.next;
      let node = current.next.next;
      current.next = node;

      // in else statement because other branches
      // call methods that do this already
      this.size--;
      return removedNode.data;
    }
  }

  isEmpty() {
    return this.size === 0;
  }

  at(index) {
    if (index >= this.size || index < 0) return null;

    if (this.head) {
      let current = this.head;

      while (index > 0) {
        current = current.next;
        index--;
      }

      return current;
    }

    return null;
  }

  indexOf(data) {
    let index = 0;
    let current = this.head;
    while (current) {
      if (current.data === data) return index;
      current = current.next;
      index++;
    }
    return null;
  }

  clear() {
    this.head = null;
    this.tail = null;
  }
}

// let dll = new DoublyLinkedList();
// dll.push(1);
// dll.push(2);
// dll.push(3);

// console.log(dll.at(0).data);
// console.log(dll.at(0).next.data); 
// console.log();
// console.log(dll.at(1).prev.data);
// console.log(dll.at(1).data); 
// console.log(dll.at(1).next.data); 
// console.log(); 
// console.log(dll.at(2).prev.data); 
// console.log(dll.at(2).data);

module.exports = DoublyLinkedList;
