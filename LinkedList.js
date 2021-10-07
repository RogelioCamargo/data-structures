class Node {
  constructor(data) {
    this.data = data; 
    this.next = null; 
  }
}

class LinkedList {
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
    }
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

    if (!this.head && !this.tail) { 
      this.head = newNode; 
      this.tail = newNode; 
    }
    else {
      this.tail.next = newNode; 
      this.tail = newNode; 
    }

    this.size++; 
  }

  insertAt(data, index) {
    if (index <= 0) this.unshift(data); 
    else if (index >= this.size) this.push(data); 
    else {
      let newNode = new Node(data); 

      let current = this.head; 
      index--; 

      while(index > 0) {
        current = current.next; 
        index--; 
      }

      let node = current.next; 
      current.next = newNode; 
      newNode.next = node; 
      
      // in else statement because other branches
      // call methods that do this already
      this.size++; 
    }
  }

  shift() {
    if (!this.head) return;

    let removedNode = this.head; 
    this.head = this.head.next; 

    if (!this.head) this.tail = null; 

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
    }
    else {
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
    else if (index >= (this.size - 1)) return this.pop();
    else {
      let current = this.head;
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

      return current.data; 
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

  clear () {
    this.head = null; 
  }

  display() {
    let current = this.head; 
    while (current) {
      console.log(current.data); 
      current = current.next; 
    }
  }
}

// let ll = new LinkedList();
// ll.push("Roger"); // Roger -> NULL
// ll.push("Ade"); // Roger -> Ade -> NULL
// ll.push("Juan"); // Roger -> Ade -> Juan -> NULL;
// ll.push("Emma"); // Roger -> Ade -> Juan -> Emma -> NULL;
// ll.display(); 

// console.log(); 

// // ll.removeAt(1); // Roger -> Juan -> Emma -> NULL;
// // ll.display(); 

// console.log(ll.removeAt(1)); // Ade

// console.log(); 

// console.log(ll.removeAt(2)); // Emma

// // ll.removeAt(2); // Roger -> Juan -> NULL
// // ll.display(); 

// console.log(); 

// console.log(ll.removeAt(0)); // Roger

// // ll.removeAt(0); // Juan -> NULL;
// // ll.display(); 

// ll.clear();

module.exports = LinkedList; 