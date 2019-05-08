'use strit';

const {Queue} = require('./queue.js');

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
    // return [...this.adjacencyList.get(vertex)];
    let neighbors = [];
    let values = this.adjacencyList.get(vertex);
    // console.log(values);
    for(let value of values){
      // console.log(value);
      neighbors.push(value);
    //   neighbors.forEach(item=>{
    //       console.log(item.vertex.value);
    //   });
    }
    //   return [...this.adjacencyList.keys();]
    // console.log(neighbors);
    return neighbors;
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

  // function to performs BFS 
  bfs(startingNode) { 
  //     // create a visited array 
  //     let visited = []; 
  //     let vertexArr = [];
  //     for (let i = 0; i < this._size; i++) {
  //       visited[i] = false; 
  //     }
    
    //     // Create an object for queue 
    //     let q = new Queue(); 
  
    //     // add the starting node to the queue 
    //     visited[startingNode] = true; 
    //     vertexArr.push(startingNode.value);
  
    //     q.enqueue(startingNode); 
    //     console.log(q.front); 
    //     console.log(q.peek()); 
    //     // loop until queue is element 
    //     while (q.front) { 
    //       console.log(1);      // get the element from the queue 
    //       let getQueueElement = q.dequeue(); 
  
    //       // passing the current vertex to callback funtion 
    //       console.log(getQueueElement); 
    //       //   vertexArr.push(getQueueElement);
    //       // get the adjacent list for current vertex 
    //       let get_List = this.getNeighbors(getQueueElement); 
    //       console.log(get_List);
    //       // loop through the list and add the element to the 
    //       // queue if it is not processed yet 
    //       for (let j in get_List) { 
    //         let neigh = get_List[j]; 
    //         console.log(neigh);
    //         if (!visited[neigh]) { 
    //           console.log(222);
    //           visited[neigh] = true;
    //           vertexArr.push(getQueueElement.value);
    //           console.log(vertexArr);

    //           q.enqueue(neigh); 
    //         } 
    //       } 
    //     }
    //     return vertexArr; 
    //   }


    let res = [];
    let q = new Queue();
    q.enqueue(startingNode);
    res.push(startingNode.value);
    while(q.front){
      let front = q.dequeue();
      let neighbors = this.getNeighbors(front);
      neighbors.forEach(item => {
        if(!res.includes(item.vertex.value)){
          res.push(item.vertex.value);
          q.enqueue(item.vertex);
        }
      });
    }
    return res;
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