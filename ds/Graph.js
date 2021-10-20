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
  constructor(typeOfGraph = Graph.UNDIRECTED) {
    this.nodes = new Map();
    this.typeOfGraph = typeOfGraph;
  }

  static *depthFirstTraversal(root) {
    const stack = [];
    const visited = new Set();
    stack.push(root);
    while (stack.length) {
      const current = stack.pop();
      yield current;
      visited.add(current);
      current.getAdjacents().forEach((node) => {
        if (!visited.has(node)) stack.push(node);
      });
    }
  }

  static *breadthFirstTraversal(root) {
    const queue = [];
    const visited = new Set();
    queue.push(root);
    while (queue.length) {
      const current = queue.shift();
      // return node
      yield current;
      // add to visited set
      visited.add(current);
      // add neighbors
      current.getAdjacents().forEach((node) => {
        if (!visited.has(node)) queue.push(node);
      });
    }
  }

  addVertex(value) {
    if (this.nodes.has(value)) return this.nodes.get(value);
    let vertex = new GraphNode(value);
    this.nodes.set(value, vertex);
    return vertex;
  }

  getVertex(value) {
    return this.nodes.get(value);
  }

  removeVertex(value) {
    let vertex = this.getVertex(value);
    if (vertex) this.nodes.forEach((node) => node.removeAdjacent(vertex));
    return this.nodes.delete(value);
  }

  addEdge(source, destination) {
    let sourceNode = this.addVertex(source);
    let destinationNode = this.addVertex(destination);

    sourceNode.addAdjacent(destinationNode);
    if (this.typeOfGraph === Graph.UNDIRECTED)
      destinationNode.addAdjacent(sourceNode);

    return [sourceNode, destinationNode];
  }

  removeEdge(source, destination) {
    let sourceNode = this.getVertex(source);
    let destinationNode = this.getVertex(destination);
    if (!sourceNode && !destinationNode) return false;

    sourceNode.removeAdjacent(destinationNode);
    if (this.typeOfGraph === Graph.UNDIRECTED)
      destinationNode.removeAdjacent(sourceNode);

    return true;
  }

  isAdjacent(source, destination) {
    let sourceNode = this.getVertex(source);
    let destinationNode = this.getVertex(destination);

    if (!sourceNode && !destinationNode) return false;

    return sourceNode.isAdjacent(destinationNode);
  }
}


Graph.UNDIRECTED = Symbol("UNDIRECTED"); 
Graph.DIRECTED = Symbol("DIRECTED");

const graph = new Graph(); 

const root = graph.addVertex(1); 
graph.addVertex(2); 
graph.addVertex(3); 
graph.addVertex(4); 
graph.addVertex(5); 

graph.addEdge(1, 2); 
graph.addEdge(1, 3);
graph.addEdge(3, 4);
graph.addEdge(4, 5); 
graph.addEdge(4, 6); 

const dft = Graph.depthFirstTraversal(root); 

console.log(dft.next().value.value); 
console.log(dft.next().value.value); 
console.log(dft.next().value.value); 
console.log(dft.next().value.value); 
console.log(dft.next().value.value); 
console.log(dft.next().value.value); 

console.log(); 

const bft = Graph.breadthFirstTraversal(root);

console.log(bft.next().value.value);
console.log(bft.next().value.value);
console.log(bft.next().value.value);
console.log(bft.next().value.value);
console.log(bft.next().value.value);
console.log(bft.next().value.value); 

// Graph.breadthFirstSearch(root); 
// Graph.depthFirstSearch(root); 

// console.log(graph.isAdjacent(1, 2)); 
// console.log(graph.isAdjacent(1, 3)); 

// graph.removeEdge(2, 3); 

// console.log(v1); 
// console.log(v2); 
// console.log(v3); 
