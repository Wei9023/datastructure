'use strict';

const LinkedList = require('./linked-list.js');

class Hashtable {
  constructor(size = 100){
    this.table = new Array( size).fill(new LinkedList());
  }


  add(key, value) {
    let index = this.hash(key);
    this.table[index].append(value);
  }
  get(key) {
    let index = this.hash(key);
    let result = this.table[index].print();
    return result.length > 0 ? result : null;
  }
  contains(key) {
    let index = this.hash(key);
    return this.table[index].print.length > 0 ? true : false;
  }
  hash(key) {
    let charCodes = [];
    for (let i = 0; i < key.length; i++) {
      charCodes.push(key.charCodeAt(i));
    }
    let sum = charCodes.reduce((acc, curr) => acc + curr);
    let product = sum * 599;
    let remainder = product % 1024;
    return Math.floor(remainder);
  }
}

module.exports = { Hashtable };
      
