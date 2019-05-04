'use strit';

class Vertex {
  constructor(value) {
    this.value = value;
  } 
}

class Edge{
  constructor(vertex, weight){
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor(){
    this.adjacencyList = new Map();
    this._size =0;
  }

  addvertex(value){
    let vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []);
    this._size ++;
    return vertex;
  }

  addDirectedEdge(startVertex, endVertex, weight) {
    let edges = this.adjacencyList.get(startVertex);
    edges.push(new Edge(endVertex, weight));
  }

  addUndirectedEdge(start, end, weight){
    this.addDirectedEdge(start, end, weight);
    this.addDirectedEdge(end, start , weight);
  }

  getNeighbors(vertex){
    return [...this.adjacencyList.get(vertex)];
  }

  getAllVertices(){
    let allVert = [];
    let values = this.adjacencyList.keys();
    for(let value of values){
      allVert.push(value);
    }
    //   return [...this.adjacencyList.keys();]
    return allVert;
  }

  print(){
    for(let [key, value] of this.adjacencyList){
      console.log(key,value);
    }
  }
}

module.exports = {Graph};

// const graph = new Graph();

// let a = graph.addvertex('Washington');
// let b = graph.addvertex('Oregon');
// let c = graph.addvertex('Caniforia');

// graph.addUndirectedEdge(a,b,10);
// graph.addUndirectedEdge(b,c,100);
// graph.addUndirectedEdge(a,c,9);

// graph.print();

// console.log(graph.getAllVertices());
// console.log(graph.getNeighbors(b));
// console.log(graph._size);