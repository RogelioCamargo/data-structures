class TrieNode() {
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
}