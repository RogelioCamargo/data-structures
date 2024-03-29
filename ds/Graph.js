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

  // static *depthFirstSearch(root) {
  //   const stack = [];
  //   const visited = new Set();
  //   stack.push(root);
  //   while (stack.length) {
  //     const current = stack.pop();
  //     yield current;
  //     visited.add(current);
  //     current.getAdjacents().forEach((node) => {
  //       if (!visited.has(node)) stack.push(node);
  //     });
  //   }
  // }

  dfs(root) {
    const stack = [];
    const visited = new Set();
    stack.push(root);
    while (stack.length) {
      const current = stack.pop();
      visited.add(current);
      console.log(current.value); 
      current.getAdjacents().forEach((node) => {
        if (!visited.has(node)) stack.push(node);
      });
    }
  }

  // dfs(root) {
  //   const visited = new Set(); 
  //   function dfsUtil(current, visited) {
  //     visited.add(current); 
  //     console.log(current.value); 
  //     current.getAdjacents().forEach((node) => {
  //       if (!visited.has(node)) dfsUtil(node, visited); 
  //     }); 
  //   }

  //   dfsUtil(root, visited); 
  // }

  static bfs(root) {
    const queue = [];
    const visited = new Set();
    queue.push(root);
    while (queue.length) {
      const current = queue.shift();
      // print value
      console.log(current.value); 
      // add to visited set
      visited.add(current);
      // add neighbors
      current.getAdjacents().forEach((node) => {
        if (!visited.has(node)) queue.push(node);
      });
    }
  }

  // static *breadthFirstSearch(root) {
  //   const queue = [];
  //   const visited = new Set();
  //   queue.push(root);
  //   while (queue.length) {
  //     const current = queue.shift();
  //     // return node
  //     yield current;
  //     // add to visited set
  //     visited.add(current);
  //     // add neighbors
  //     current.getAdjacents().forEach((node) => {
  //       if (!visited.has(node)) queue.push(node);
  //     });
  //   }
  // }

  isCyclicUndirected() {
    function util(current, visited, parent) {
      visited.add(current); 
      for (const node of current.getAdjacents()) {
        if (node === parent) continue;
        if (visited.has(node)) return true;
        let hasCycle = util(node, visited, parent); 
        return hasCycle;
      }
      return false; 
    }

    for (const vertex of this.getVertices()) {
      const visited = new Set(); 
      let hasCycle = util(vertex, visited, null);
      if (hasCycle) return true; 
    }
    return false; 

    // return isCyclicUtil(root, visited, null); 
  }

  isCyclicDirected() {
    function swap(current, source, destination) {
      source.delete(current);
      destination.add(current);
    }

    function util(current, unvisited, visiting, visited) {
      swap(current, unvisited, visiting); 

      for (const adjacent of current.getAdjacents()) {
        if (visited.has(adjacent)) continue;
        if (visiting.has(adjacent)) return true;
        let hasCycle = util(adjacent, unvisited, visiting, visited);
        if (hasCycle) return true;
      }

      swap(current, visiting, visited);
      return false; 
    }

    const unvisited = new Set([...this.getVertices()]); 
    const visiting = new Set();
    const visited = new Set(); 

    let iterator = unvisited.values(); 
    while (unvisited.size > 0) {
      let current = iterator.next().value; 
      let hasCycle = util(current, unvisited, visiting, visited); 
      if (hasCycle) return true; 
    }

    return false; 
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

  getVertices() { 
    return this.nodes.values(); 
  }

  getSize() {
    return this.nodes.size;
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

  hasPath(source, destination) {
    let sourceNode = this.getVertex(source); 
    let destinationNode = this.getVertex(destination); 

    if (!sourceNode && !destinationNode) return false; 

    let queue = []; 
    let visited = new Set(); 
    queue.push(sourceNode); 
    while (queue.length) {
      let current = queue.shift(); 
      if (current === destinationNode)
        return true; 
      visited.add(current); 
      current.getAdjacents().forEach(node => {
        if (!visited.has(node)) queue.push(node); 
      })
    }
    return false; 
  }
}


Graph.UNDIRECTED = Symbol("UNDIRECTED"); 
Graph.DIRECTED = Symbol("DIRECTED");

// const graph = new Graph(); 

const dgraph = new Graph(Graph.DIRECTED); 

dgraph.addEdge(4, 1); 
dgraph.addEdge(4, 5); 
dgraph.addEdge(5, 6); 
dgraph.addEdge(6, 4); 
dgraph.addEdge(1, 2); 
dgraph.addEdge(1, 3); 
dgraph.addEdge(2, 3); 

let result = dgraph.isCyclicDirected(); 
console.log(result); 

// dgraph.dfs(lroot); 
// dgraph.dfs(rroot); 

// const root = graph.addVertex(1); 
// graph.addVertex(2); 
// graph.addVertex(3); 
// graph.addVertex(4); 
// graph.addVertex(5); 
// graph.addVertex(6); 

// // subgraph
// let subroot = graph.addVertex(7); 
// graph.addVertex(8); 
// graph.addVertex(9); 

// graph.addEdge(1, 2); 
// graph.addEdge(1, 3);
// graph.addEdge(3, 4);
// graph.addEdge(4, 5); 
// graph.addEdge(4, 6); 

// // make subgraph cyclic
// graph.addEdge(7, 8); 
// graph.addEdge(8, 9); 
// graph.addEdge(9, 7); 


// console.log(graph.isCyclic()); // true
// console.log(graph.isCyclic(subroot)); 


// IGNORE BENEATH

// console.log(graph.hasPath(1, 5)); 
// console.log(graph.hasPath(1, 7)); 

// const dft = Graph.depthFirstSearch(root); 

// console.log(dft.next().value.value); 
// console.log(dft.next().value.value); 
// console.log(dft.next().value.value); 
// console.log(dft.next().value.value); 
// console.log(dft.next().value.value); 
// console.log(dft.next().value.value); 

// console.log(); 

// const bft = Graph.breadthFirstSearch(root);

// console.log(bft.next().value.value);
// console.log(bft.next().value.value);
// console.log(bft.next().value.value);
// console.log(bft.next().value.value);
// console.log(bft.next().value.value);
// console.log(bft.next().value.value); 

// console.log(graph.isAdjacent(1, 2)); 
// console.log(graph.isAdjacent(1, 3)); 

// graph.removeEdge(2, 3); 

// console.log(v1); 
// console.log(v2); 
// console.log(v3); 
