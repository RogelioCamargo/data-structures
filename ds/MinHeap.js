class MinHeap {
  constructor() {
    this.items = []; 
    this.size = 0; 
  }

  // Helper functions
  getLeftChildIndex(parentIndex) { return 2 * parentIndex + 1; }
  getRightChildIndex(parentIndex) { return 2 * parentIndex + 2; }
  getParentIndex(childIndex) { return Math.floor((childIndex - 1) / 2); }

  hasLeftChild(index) { return this.getLeftChildIndex(index) < this.size; }
  hasRightChild(index) { return this.getRightChildIndex(index) < this.size; }
  hasParent(index) { return this.getParentIndex(index) >= 0; }

  leftChild(index) { return this.items[this.getLeftChildIndex(index)]; }
  rightChild(index) { return this.items[this.getRightChildIndex(index)]; }
  parent(index) { return this.items[this.getParentIndex(index)]; }

  swap(indexOne, indexTwo) {
    let temp = this.items[indexOne]; 
    this.items[indexOne] = this.items[indexTwo]; 
    this.items[indexTwo] = temp; 
    // [this.items[indexOne], this.items[indexTwo]] = [this.items[indexTwo], this.items[indexOne]]; 
  }

  // Main functions
  peek() { 
    if (!this.size) return null; 
    return this.items[0]; 
  }

  poll() {
    if (!this.size) return null; 
    let item = this.items[0]; 
    this.items[0] = this.items[this.size - 1]; 
    this.items.pop();
    this.size--; 
    this.heapifyDown(); 
    return item; 
  }

  insert(item) {
    this.items.push(item); 
    this.size++; 
    this.heapifyUp(); 
  }

  heapifyDown() {
    let index = 0; 
    while(this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index); 
      if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) 
        smallerChildIndex = this.getRightChildIndex(index); 
      
      if (this.items[index] < this.items[smallerChildIndex]) 
        break; 
      else 
        this.swap(index, smallerChildIndex);

      index = smallerChildIndex;
    }
  }

  heapifyUp() {
    let index = this.size - 1; 
    while(this.hasParent(index) && this.parent(index) > this.items[index]) {
      this.swap(this.getParentIndex(index), index); 
      index = this.getParentIndex(index);
    } 
  }

  display() {
    let sequence = ""; 
    for (const item of this.items) {
      sequence += item + " "; 
    }
    return sequence;
  }
}

let mh = new MinHeap(); 
mh.insert(10); 
mh.insert(15);
mh.insert(1);
mh.insert(17);
mh.insert(25);
mh.insert(33);
mh.insert(3);
console.log(mh.display()); 

mh.poll(); 
console.log(mh.display()); 

mh.poll();
console.log(mh.display()); 

mh.poll();
console.log(mh.display()); 



