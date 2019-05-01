'use strict';
const {Hashtable} = require('../hash-table/hashtable.js');

let treeIntersection = (tree1, tree2) => {
  let res = [];
  let ht = new Hashtable(1024);
  let arr1 = [];
  let arr2 = [];
  tree1.preOrder(tree1.root, arr1=[]);
  
  tree2.preOrder(tree2.root, arr2=[]);
  console.log(arr1);
  console.log(arr2);
  arr1.forEach(item => {
    ht.add(item.toString(), item);
    
    // console.log(ht);
  });
  arr2.forEach(item => {
    if (!ht.get(item.toString())){
    //   console.log(item);
      ht.add(item.toString(), item);
    }
    else{
      res.push(item);
    //   console.log(res);
    }
  });
  return res;
};
  
module.exports = {treeIntersection};


