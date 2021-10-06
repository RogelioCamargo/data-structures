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

    if (this.head === null) {
      this.head = newNode; 
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

    if (this.head === null) {
      this.head = newNode; 
    }
    else {
      let current = this.head; 
      while (current.next !== null) {
        current = current.next; 
      }
      current.next = newNode;
    }

    this.size++; 
  }

  shift() {
    if (this.head === null) return;
    else {
      let node = this.head.next; 
      this.head = node; 
    }

    this.size--; 
  }

  display() {
    let current = this.head; 
    while (current !== null) {
      console.log(current.data); 
      current = current.next; 
    }
  }
}

// let ll = new LinkedList();
// ll.unshift("Roger"); // Roger -> NULL
// ll.unshift("Ade"); // Ade -> Roger -> NULL
// ll.unshift("Emma"); // Emma -> Ade -> Roger -> NULL
// ll.display();
// console.log("After ---------")
// ll.shift(); // Roger -> NULL
// ll.display(); 


module.exports = LinkedList; 