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
      newNode.next = this.head;
      this.head.prev = newNode; 
      this.head = newNode;
    }

    this.size++;
  }

  push(data) {
    let newNode = new Node(data);

    if (!this.head && !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
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
      while (index > 0) {
        current = current.next;
        index--;
      }

      newNode.next = current; 
      newNode.prev = current.prev; 
      current.prev.next = newNode; 
      current.prev = newNode; 

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
      this.head.prev = null; 
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
      removedNode = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null; 
    }

    this.size--;
    return removedNode.data;
  }

  removeAt(index) {
    if (index < 0 && index > this.size) return null; 

    if (index === 0) return this.shift();
    else if (index === this.size - 1) return this.pop();
    else {
      let current = this.head;

      while (index > 0) {
        current = current.next;
        index--;
      }

      let removedNode = current; 
      current.prev.next = current.next; 
      current.next.prev = current.prev; 

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

  traverse(direction) {
    let elements = []; 

    if (direction === "F") {
      let current = this.head; 

      while (current) {
        elements.push(current.data); 
        current = current.next; 
      }
    }
    else {
      let current = this.tail;

      while (current) {
        elements.push(current.data);
        current = current.prev;
      }
    }

    return elements;
  }
}

module.exports = DoublyLinkedList;
