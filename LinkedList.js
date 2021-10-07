class Node {
  constructor(data) {
    this.data = data; 
    this.next = null; 
  }
}

class LinkedList {
  constructor() {
    this.head = null; 
    this.size = 0;
  }

  unshift(data) {
    let newNode = new Node(data); 

    if (!this.head) this.head = newNode; 
    else {
      // get first node
      let node = this.head; 
      this.head = newNode; 
      newNode.next = node; 
    }

    this.size++; 
  }

  push(data) {
    let newNode = new Node(data); 

    if (!this.head) this.head = newNode; 
    else {
      let current = this.head; 
      while (current.next) {
        current = current.next; 
      }
      current.next = newNode;
    }

    this.size++; 
  }

  shift() {
    if (!this.head) return;
    else this.head = this.head.next; 

    this.size--; 
  }

  pop() {
    if (!this.head) return; 
    else if (!this.head.next) this.head = null; 
    else {
      let current = this.head;
      while (current.next.next) {
        current = current.next;
      }
      current.next = null; 
    }

    this.size--;
  }

  isEmpty() {
    return this.size === 0; 
  }

  indexOf(data) {
    let index = 0; 
    let current = this.head; 
    while (current) {
      if (current.data === data) return index;
      current = current.next;
      index++;
    }
    return -1; 
  }

  display() {
    let current = this.head; 
    while (current) {
      console.log(current.data); 
      current = current.next; 
    }
  }
}

module.exports = LinkedList; 