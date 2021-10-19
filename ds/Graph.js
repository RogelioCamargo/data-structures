class GraphNode {
  constructor(value) {
    this.value = value; 
    this.adjacents = []; 
  }

  addAdjacent(node) { 
    this.adjacents.push(node);
  }

  removeAdjacent(node) { 
    let index = this.adjacents.indexOf(node); 
    if (index > -1) {
      this.adjacents.splice(index, 1); 
      return node; 
    }
  }

  getAdjacents() {
    return this.adjacents; 
  }

  isAdjacent(node) {
    return this.adjacents.indexOf(node) > -1; 
  }
}
