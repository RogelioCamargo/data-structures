class Node {
  constructor(data, priority) {
    this.data = data; 
    this.priority = priority; 
  }
}

// A priority queue is essentially the same as a min heap. 
class PriorityQueue {
  constructor() {
    this.items = [];
    this.size = 0;
  }

  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }
  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }
  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.size;
  }
  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.size;
  }
  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  leftChildPriority(index) {
    return this.items[this.getLeftChildIndex(index)].priority;
  }
  rightChildPriority(index) {
    return this.items[this.getRightChildIndex(index)].priority;
  }
  parentPriority(index) {
    return this.items[this.getParentIndex(index)].priority;
  }

  swap(indexOne, indexTwo) {
    let temp = this.items[indexOne];
    this.items[indexOne] = this.items[indexTwo];
    this.items[indexTwo] = temp;
  }

  peek() {
    if (!this.size) return null;
    return this.items[0].data;
  }

  dequeue() {
    if (!this.size) return null;
    let item = this.items[0];
    this.items[0] = this.items[this.size - 1];
    this.items.pop();
    this.size--;
    this.heapifyDown();
    return item.data;
  }

  enqueue(data, priority) {
    let newNode = new Node(data, priority);
    this.items.push(newNode);
    this.size++;
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.size - 1;
    while (
      this.hasParent(index) &&
      this.parentPriority(index) > this.items[index].priority
    ) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }

  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.rightChildPriority(index) < this.leftChildPriority(index)
      )
        smallerChildIndex = this.getRightChildIndex(index);

      if (this.items[index].priority < this.items[smallerChildIndex].priority)
        break;
      else 
        this.swap(index, smallerChildIndex);

      index = smallerChildIndex;
    }
  }

  display() {
    for (let i = 0; i < this.size; i++) {
      let item = this.items[i];
      console.log(item.priority + " " + item.data);
    }
  }
}

let queue = new PriorityQueue();
queue.enqueue("Roger", 3);
queue.enqueue("Ade", 3);
queue.enqueue("Emmaline", 3);
queue.enqueue("Juan", 3);
queue.enqueue("Elias", 3);
queue.enqueue("Kim", 3);
queue.enqueue("Ana", 1);
queue.display();

console.log(); 
queue.dequeue();
queue.display();

console.log(); 
queue.dequeue();
queue.display();

console.log(); 
queue.dequeue();
queue.display();

console.log();
queue.dequeue();
queue.display();

console.log();
queue.dequeue();
queue.display();