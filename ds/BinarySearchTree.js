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