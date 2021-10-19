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
    return null; 
  }

  getAdjacents() {
    return this.adjacents; 
  }

  isAdjacent(node) {
    return this.adjacents.indexOf(node) > -1; 
  }
}

class Graph {
  constructor() {
    this.nodes = new Map();
  }

  addVertex(value) {
    if (this.nodes.has(value)) return this.nodes.get(value); 
    let vertex = new GraphNode(value);   
    this.nodes.set(value, vertex);
    return vertex; 
  }

  removeVertex(value) {
    let vertex = this.nodes.get(value); 
    if (vertex) {
      for (const node of this.nodes.values())
        node.removeAdjacent(value); 
    }
    return this.nodes.delete(value);
  }

  addEdge(start, end) {
    
  }


  removeEnd(start, end) {

  }
}
