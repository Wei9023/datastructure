'use strict';

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
  
class Stack { 
  

  /**
 * Array is used to implement stack 
 */
  constructor() 
  {  
    this.top = null;
  } 
  
  // Functions to be implemented 
  // push(item) 
  push(val) { 
    let node = new Node(val);
    if (this.top) {
      node.next = this.top;
      this.top = node;
    } else {
      this.top = node;
    }
  }
  

  // pop() 
  pop() { 
    // return top most element in the stack 
    // and removes it from the stack 
    // Underflow if stack is empty 
    // let top;
    // if (this.top.next) {
    //   top = this.top;
    //   this.top = this.top.next;
    // } else if (this.top) {
    //   top = this.top;
    //   this.top = null;
    // } else {
    //   return null;
    // }
    // return top.value;
    
    let top;
    if (this.top) {
      top = this.top;
      this.top = this.top.next;
    }
    if(top){
      return top.value;
    }else{
      return null;
    }
  }

  // peek() 
  peek() { 
    // return the top most element from the stack 
    // but does'nt delete it. 
    if (this.top) {
      return this.top.value;
    } else {
      return null;
    }
  } 
  
} 


class Queue  {
  // Array is used to implement a Queue 
  constructor() 
  { 
    this.front = null;
    this.back = null;
  } 
                  
  // Functions to be implemented 
  // enqueue(item) 
  enqueue(val) { 
    let node = new Node(val);    
    // adding element to the queue 
    node.next = this.back;
    this.back = node;
    if (!this.front) {
      this.front = node;
    }
  } 

  // dequeue() 
  dequeue() { 
    let current = this.back;
    if (!current) {
      return null;
    }
    if (!current.next) {
      this.back = null;
      this.front = null;
      return current.value;
    }

    while (current.next && current.next.next) {
      current = current.next;
    }
    const target = current.next;
    current.next = null;
    this.front = current;
    return target.value;
  }
  
  peek() {
    if (!this.front) {
      return null;
    }
    if (this.front) {
      return this.front.value;
    }
  }
}

module.exports = {Stack, Queue};