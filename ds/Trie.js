class TrieNode {
  constructor() {
    this.children = new Map(); 
    this.isWord = false; 
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode(); 
  }

  insert(word) {
    if (!word.length) return null; 
    this.insertNode(this.root, word, 0); 
  }

  insertNode(current, word, index) {
    if (index === word.length) {
      current.isWord = true; 
      return null; 
    }

    let char = word.charAt(index); 
    let charNode = current.children.get(char); 

    if (!charNode) {
      charNode = new TrieNode(); 
      current.children.set(char, charNode); 
    }

    this.insertNode(charNode, word, index + 1); 
  }

  search(word) {
    if (!word.length) return false; 
    return this.searchNode(this.root, word, 0); 
  }

  searchNode(current, word, index) {
    if (index === word.length) {
      return current.isWord;
    }; 

    let char = word.charAt(index); 
    let charNode = current.children.get(char); 

    if (!charNode) return false; 

    return this.searchNode(charNode, word, index + 1); 
  }

  delete(word) {
    if (!word.length) return null; 
    if (!this.search(word)) return null; 

    this.deleteNode(this.root, word, 0); 
  }

  deleteNode(current, word, index) {
    if (index === word.length) {
      current.isWord = false;  
      return null;
    }

    let char = word.charAt(index); 
    let charNode = current.children.get(char); 

    this.deleteNode(charNode, word, index + 1); 

    if (!charNode.children.size && !charNode.isWord) {
      current.children.delete(char); 
    }
  }
}

let trie = new Trie(); 

trie.insert("car"); 
// console.log("car: " + trie.search("car"));
trie.insert("cart")
// console.log("cart: " + trie.search("cart"));
trie.insert("due");
// console.log("due: " + trie.search("due"));
console.log(trie.root.children); 

trie.delete("duee"); 
console.log("car: " + trie.search("car"));
console.log("cart: " + trie.search("cart"));
console.log("due: " + trie.search("due"));
console.log(trie.root.children); 

// console.log(trie.root.children); 
// let nextNode = trie.root.children.get("c").children.get("a");
// console.log(nextNode); 

// console.log(nextNode.children.get("r"))