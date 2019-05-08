// Node can be successfully added to the graph
// An edge can be successfully added to the graph
// A collection of all nodes can be properly retrieved from the graph
// All appropriate neighbors can be retrieved from the graph
// Neighbors are returned with the weight between nodes included
// The proper size is returned, representing the number of nodes in the graph
// A graph with only one node and edge can be properly returned
// An empty graph properly returns null

const { Graph } = require('../graph.js');

describe( 'Graph', () =>{
  it('Node can be successfully added to the graph', () =>{
    let gf = new Graph();
    gf.addvertex('vanessa');
    expect(gf.getAllVertices()).toEqual([{'value': 'vanessa'}]);
  });

  it('An edge can be successfully added to the graph', () =>{
    let gf = new Graph();
    let a = gf.addvertex('vanessa');
    let b = gf.addvertex('tony');
    gf.addDirectedEdge(a, b, 10);
    expect(gf.getAllVertices()).toEqual([ {'value': 'vanessa'},{'value': 'tony'}]);
    // console.log(gf.getNeighbors(a));
    expect(gf.getNeighbors(a)).toEqual([{'vertex': {'value': 'tony'}, 'weight': 10}]);
  });

  it('A collection of all nodes can be properly retrieved from the graph', () =>{
    let gf = new Graph;
    let a = gf.addvertex('Washington');
    let b = gf.addvertex('Oregon');
    let c = gf.addvertex('Canifornia');

    gf.addUndirectedEdge(a,b,10);
    gf.addUndirectedEdge(b,c,100);
    gf.addUndirectedEdge(a,c,9);
    console.log(gf);
    expect(gf.getAllVertices()).toEqual([{'value': 'Washington'}, {'value': 'Oregon'}, {'value': 'Canifornia'}]);
    // [ {'value': 'Wahington'},{'value': 'Oregon'},{'value': 'Canifornia'}]
  });

  it(' All appropriate neighbors can be retrieved from the graph', () =>{
    let gf = new Graph;
    let a = gf.addvertex('Washington');
    let b = gf.addvertex('Oregon');
    let c = gf.addvertex('Canifornia');

    gf.addUndirectedEdge(a,b,10);
    gf.addUndirectedEdge(b,c,100);
    gf.addUndirectedEdge(a,c,9);

    expect(gf.getNeighbors(a)).toEqual([{'vertex': {'value': 'Oregon'}, 'weight': 10}, {'vertex': {'value': 'Canifornia'}, 'weight': 9}]);    
  });

  it('Neighbors are returned with the weight between nodes included', () =>{
    let gf = new Graph;
    let a = gf.addvertex('Washington');
    let b = gf.addvertex('Oregon');
    let c = gf.addvertex('Canifornia');

    gf.addUndirectedEdge(a,b,10);
    gf.addUndirectedEdge(b,c,100);
    gf.addUndirectedEdge(a,c,9);

    expect(gf.getNeighbors(a)).toEqual([{'vertex': {'value': 'Oregon'}, 'weight': 10}, {'vertex': {'value': 'Canifornia'}, 'weight': 9}]); 
  });

  it('The proper size is returned, representing the number of nodes in the graph', () =>{
    let gf = new Graph;
    gf.addvertex('Washington');
    gf.addvertex('Oregon');
    gf.addvertex('Canifornia');

    expect(gf._size).toEqual(3);
  });

  it('A graph with only one node and edge can be properly returned', () =>{
    let gf = new Graph();
    let a = gf.addvertex('vanessa');
    gf.addDirectedEdge(a, null, 10);
    expect(gf.getAllVertices()).toEqual([{'value': 'vanessa'}]);
    expect(gf.getNeighbors(a)).toEqual([{'vertex': null, 'weight': 10}]);
  });

  it('An empty graph properly returns null', () =>{
    let gf = new Graph();
    expect(gf.print()).not.toBeDefined();
  });

  it('can bread first traversal', () =>{
    let gf = new Graph;
    let a = gf.addvertex('Washington');
    let b = gf.addvertex('Oregon');
    let c = gf.addvertex('Canifornia');
    gf.addUndirectedEdge(a,b,10);
    gf.addUndirectedEdge(b,c,100);
    gf.addUndirectedEdge(a,c,9);

    expect(gf.bfs(a)).toEqual(['Washington','Oregon','Canifornia']);
  });

  it('can bread first traversal a one node graph', () =>{
    let gf = new Graph;
    let a = gf.addvertex('Washington');

    expect(gf.bfs(a)).toEqual(['Washington']);
  });

  it('can bread first traversal from ', () =>{
    let gf = new Graph;
    let a = gf.addvertex('Washington');
    let b = gf.addvertex('Oregon');
    let c = gf.addvertex('Canifornia');
    let d = gf.addvertex('New york');
    gf.addUndirectedEdge(a,b,10);
    gf.addUndirectedEdge(b,c,100);
    gf.addUndirectedEdge(a,c,9);
    gf.addUndirectedEdge(a,d,5);
    expect(gf.bfs(d)).toEqual(['New york','Washington','Oregon','Canifornia']);
  });

  it('can depth first traversal', () =>{
    let gf = new Graph;
    let a = gf.addvertex('Washington');
    let b = gf.addvertex('Oregon');
    let c = gf.addvertex('Canifornia');
    // let d = gf.addvertex('Canifornia');
    gf.addUndirectedEdge(a,b,10);
    gf.addUndirectedEdge(b,c,100);
    gf.addUndirectedEdge(a,c,9);

    expect(gf.depthFirst(a)).toEqual(['Washington','Oregon','Canifornia']);
  });

  it('can depth first traversal if the graph just has one node', () =>{
    let gf = new Graph;
    let a = gf.addvertex('Washington');

    expect(gf.depthFirst(a)).toEqual(['Washington']);
  });

  it('can just return the root if the graph has no edge', () =>{
    let gf = new Graph;
    let a = gf.addvertex('Washington');
    let b = gf.addvertex('Oregon');
    let c = gf.addvertex('Canifornia');

    expect(gf.depthFirst(a)).toEqual(['Washington']);
  });
});