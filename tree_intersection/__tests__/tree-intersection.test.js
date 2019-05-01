'use strict';

const {BinarySearchTree} = require ('../tree.js');
const {treeIntersection} = require('../tree-intersection.js');



describe('Hashtable', () => {
  it('Returns `null` if the tree is empty', () => {
    let tree1 = new BinarySearchTree();
    let values1 = [1,2,3,4,5];
    values1.map( val => tree1.add(val));
    let tree2 = new BinarySearchTree();
    let values2 = [1,3,5];
    values2.map( val => tree2.add(val));
    expect(treeIntersection(tree1,tree2)).toEqual([1]);
  });

  it('Returns `null` if the tree is empty', () => {
    let tree1 = new BinarySearchTree();
    let values1 = [9,4,17,3];
    values1.map( val => tree1.add(val));
    let tree2 = new BinarySearchTree();
    let values2 = [6,22,5,7,20];
    values2.map( val => tree2.add(val));
    expect(treeIntersection(tree1,tree2)).toEqual([]);
  });

  it('Returns `null` if the tree is empty', () => {
    let tree1 = new BinarySearchTree();
    let tree2 = new BinarySearchTree();
    let values2 = [9,4,17,3];
    values2.map( val => tree2.add(val));
    expect(treeIntersection(tree1,tree2)).toEqual([]);
  });
   
});