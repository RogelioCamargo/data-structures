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

    this.size--; 
    return removedNode.data; 
  }

  pop() {
    if (!this.head) return; 

    let removedNode; 
    if (!this.head.next) {
      removedNode = this.head; 
      this.head = null; 
    }
    else {
      let current = this.head;
      while (current.next.next) {
        current = current.next;
      }
      removedNode = current;
      current.next = null; 
    }

    this.size--;
    return removedNode.data; 
  }

  removeAt(index) {
    if (index <= 0) this.shift();
    else if (index >= (this.size - 1)) this.pop();
    else {
      let current = this.head;
      index--;

      while (index > 0) {
        current = current.next;
        index--;
      }

      let node = current.next.next;
      current.next = node;

      // in else statement because other branches
      // call methods that do this already
      this.size--;
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
// ll.insertAt("Roger", -1); // Roger -> NULL
// ll.insertAt("Ade", 3); // Roger -> Ade -> NULL
// ll.insertAt("Juan", 1); // Roger -> Juan -> Ade -> NULL; 
// ll.insertAt("Emma", 1); // Roger -> Emma -> Juan -> Ade -> NULL; 
// ll.insertAt("Kim", 3); // Roger -> Emma -> Juan -> Kim -> Ade -> NULL;

// ll.display(); 
// console.log(); 
// console.log(ll.at(0)); // Roger
// console.log(ll.at(1)); // Emma
// console.log(ll.at(2)); // Juan
// console.log(ll.at(3)); // Kim
// console.log(ll.at(4)); // Ade

// ll.clear();

module.exports = LinkedList; 