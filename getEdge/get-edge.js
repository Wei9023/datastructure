'use strict';

module.exports = (arr, graph) => {
  let price = 0;
  let bool = false;
  
  for(let i = 0; i < arr.length-1; i++){
    if(!graph.getAllVertices().includes(arr[i])){return bool;}
    // if(bool === true){
    graph.getNeighbors(arr[i]).forEach(item => {
      if(item.vertex === arr[i+1]){
        price+= item.weight;
        bool = true;
      }
    });
    // }
  }
  return [bool, price];
};
