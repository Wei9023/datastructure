const getEdge = require('../get-edge.js');
const { Graph } = require('../../graph/graph.js');

describe( 'Graph', () =>{
  let gf = new Graph();
  let a = gf.addvertex('Seattle');
  let b = gf.addvertex('Olympia');
  let c = gf.addvertex('Newyork');
  let d = gf.addvertex('Atlanta');
  let e = gf.addvertex('Dallas');
  let f = gf.addvertex('Chiccago');

  gf.addUndirectedEdge(a,b,80);
  gf.addUndirectedEdge(b,c,100);
  gf.addUndirectedEdge(a,c,120);
  gf.addUndirectedEdge(b,d,40);
  gf.addUndirectedEdge(c,e,60);
  gf.addUndirectedEdge(c,f,75);

  console.log(gf);
  console.log(gf.getNeighbors(c));
    
  it(' can successfully get the price if route works', () =>{
    let arr = [a,c,e];
    expect(getEdge(arr,gf)).toEqual([true, 180]);
  });

  it(' can not get the price if route does not work', () =>{
    let arr = [a,d,c];
    expect(getEdge(arr,gf)).toEqual([false, 0]);
  });

  it(' can successfully get the price if route works', () =>{
    let arr = [a,b];
    expect(getEdge(arr,gf)).toEqual([true, 80]);
  });
});