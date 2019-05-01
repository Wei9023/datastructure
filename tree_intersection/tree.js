'use strict';
const {Queue} = require('./stacks-and-queues.js');



class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  inorder(node) { 
    let treeArr = [];
    if(node !== null) { 
      this.inorder(node.left); 
      // console.log(node.data);
      treeArr.push(node.data); 
      this.inorder(node.right); 
    } 
    return treeArr;
  } 

  // Performs preorder traversal of a tree     
  preOrder(node,arr=[]) {
    if(node != null) {
      arr.push(node.data);
      if(node.left) {this.preOrder(node.left);}
      if(node.right) {this.preOrder(node.right);}
    }
    return arr;
  } 

  postorder(node) {
    let treeArr = []; 
    // console.log(node);
    if(node != null) { 
      this.postorder(node.left);
      // console.log(node.left) ;
      this.postorder(node.right); 
      // console.log(node.right);
      // console.log(node.data);
      treeArr.push(node.data); 
    } 
    return treeArr;
  }

  breadthFisrtTraversal(){
    let queue = new Queue();
   
    let output = [];
    let currentNode = this.root;
    queue.enqueue(currentNode);
    if (!currentNode) {
      return null;
    }
    while(queue.peek()) {
      currentNode = queue.dequeue();
      output.push(currentNode.data);
      
      if(currentNode.left) {
        queue.enqueue(currentNode.left);
      }
      if(currentNode.right) {
        queue.enqueue(currentNode.right);
      } 
    }
    return output;
  }

  findMaximumValue(node=this.root){
    if(node === null){
      return null;
    }
    //   let max = node.data;
    //   let leftVal = this.findMaximumValue(node.left.data);
    //   console.log('left', leftVal);
    //   let rightVal = this.findMaximumValue(node.right.data);
    //   console.log('right', rightVal);
    //   if( leftVal && leftVal > max){
    //     max = leftVal;
    //   }
    //   if(rightVal && rightVal > max){
    //     max = rightVal;
    //   }
    //   return max;
    // }
    let arr = this.breadthFisrtTraversal();
    let max =0;
    arr.forEach(val => {
      if(val > max){
        max = val;
      }
    });
    return max;
  }

  oddSum(node=this.root, arr=[]){
    let sum = 0;
    if(node !== null){
      if(node.data % 2 !== 0){
        arr.push(node.data);
      }
      this.oddSum(node.left, arr);
      this.oddSum(node.right, arr);
    }
    for(let i=0; i<arr.length; i++){
      sum = sum + arr[i];
    }
    return sum;
  }

  postInverse(node = this.root){
    if(this.left){
      this.postInverse(node.left);
    }
    if(this.right){
      this.postInverse(node.right);
    }
    let temp = this.root.left;
    this.root.left = this.root.right;
    this.root.right = temp;
    // arr.push(this.root);
    // return arr;
  }
  

}


class BinarySearchTree extends BinaryTree {

  add(data) {
    let newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;   
    } else {
      this.addNode( this.root, newNode);
    }
  }

  addNode (node, newNode) {
    if( newNode.data < node.data) {
      if( node.left === null ){
        node.left = newNode;
      }else {
        this.addNode(node.left, newNode);
      }
    }else{
      if(node.right === null){
        node.right = newNode;
      }else{
        this.addNode(node.right, newNode);
      }
    }
  }


  // search for a node with given data 
  contain(value) { 
    let doesContain = false;
    //accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
    function recurse(bst) {
      if(bst === null){
        doesContain = false;
      }else{
        if (bst.data === value) {
          doesContain = true;
        } else if (bst.left !== undefined && value < bst.data) {
          recurse(bst.left);
        } else if (bst.right !== undefined && value > bst.data) {
          recurse(bst.right);
        }
      }
    }
    recurse(this.root);
    return doesContain; 
  } 
}


module.exports = {BinaryTree, BinarySearchTree};