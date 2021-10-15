class Node {
  constructor(data) {
    this.data = data; 
    this.left = null; 
    this.right = null; 
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let newNode = new Node(data);

    if (!this.root) this.root = newNode;
    else this.insertNode(this.root, newNode);
  }

  insertNode(node, newNode) {
    if (newNode.data <= node.data) {
      if (!node.left) node.left = newNode;
      else this.insertNode(node.left, newNode);
    } else {
      if (!node.right) node.right = newNode;
      else this.insertNode(node.right, newNode);
    }
  }

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node, data) {
    if (!node) return null;
    else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (!node.left && !node.right) return null;
      else if (!node.left) return node.right;
      else if (!node.right) return node.left;
      else {
        let minNode = this.getMin(node.right);
        node.data = minNode.data;
        node.right = this.removeNode(node.right, minNode.data);
        return node;
      }
    }
  }

  inOrder(node) {
    if (node) {
      this.inOrder(node.left);
      console.log(node.data);
      this.inOrder(node.right);
    }
  }

  preOrder(node) {
    if (node) {
      console.log(node.data);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  postOrder(node) {
    if (node) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.data);
    }
  }

  breadth(node) {
    let queue = [];
    queue.push(this.root);

    while (queue.length > 0) {
      let node = queue.shift();
      console.log(node.data);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  depth(node) {
    let stack = []; 
    stack.push(this.root); 

    while (stack.length > 0) {
      let node = stack.pop(); 
      console.log(node.data); 
      if (node.right) stack.push(node.right); 
      if (node.left) stack.push(node.left); 
    }
  }

  getMin(node) {
    if (!node) return null;

    if (!node.left) return node;
    else return this.getMin(node.left);
  }

  getMax(node) {
    if (!node) return null;

    if (!node.right) return node;
    else return this.getMax(node.right);
  }
}

let bst = new BinarySearchTree(); 

bst.insert(5); 
bst.insert(3); 
bst.insert(2);
bst.insert(4);
bst.insert(7);
bst.insert(6); 
bst.insert(8);
// bst.insert(9);
// bst.insert(10);

// bst.inOrder(bst.root); 
// console.log(); 

// bst.preOrder(bst.root);
// console.log(); 

// bst.depth(bst.root); 
// console.log(); 

// bst.postOrder(bst.root);
// console.log(); 

// bst.breadth(bst.root);
// console.log(); 

// bst.remove(6);

console.log(bst.isBalanced(bst.root));

// bst.inOrder(bst.root);
// console.log(); 

// console.log(bst.getMin(bst.root)); 
// console.log();
// console.log(bst.getMax(bst.root)); 