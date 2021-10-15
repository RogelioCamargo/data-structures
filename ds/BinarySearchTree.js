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
    else {
      function insertNode(node, newNode) {
        if (newNode.data < node.data) {
          if (!node.left) node.left = newNode;
          else insertNode(node.left, newNode);
        } else {
          if (!node.right) node.right = newNode;
          else insertNode(node.right, newNode);
        }
      }
      insertNode(this.root, newNode);
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
    }
    else if (data > node.data) {
      node.right = this.removeNode(node.right, data); 
      return node; 
    }
    else {
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
      this.inOrder(node.left);
      this.inOrder(node.right);
    }
  }
  postOrder(node) {
    if (node) {
      this.inOrder(node.left);
      this.inOrder(node.right);
      console.log(node.data);
    }
  }

}

let bst = new BinarySearchTree(); 

// bst.insert(8); 
// bst.insert(4); 
// bst.insert(6);
// bst.insert(5);
// bst.insert(7);
// bst.insert(2); 
// bst.insert(12);
// bst.insert(10);

// bst.inOrder(bst.root); 
// console.log(); 

// bst.remove(6);
// bst.inOrder(bst.root);
// console.log(); 

// console.log(bst.getMin(bst.root)); 
// console.log();
// console.log(bst.getMax(bst.root)); 