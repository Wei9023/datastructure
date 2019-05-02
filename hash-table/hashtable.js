'use strict';

let {LinkedList} = require('./linked-list.js');

class Hashtable {
  constructor(size){
    this.buckets =  new Array(size);
    this.size = size;
  }



  add(key, value){
    let index = this.hash(key);
    let entry = {[key]: value};
    this.buckets[index] = new LinkedList();
    this.buckets[index].append(entry);
  }


  get(key){
    if(this.buckets[this.hash(key)]){
      return this.buckets[this.hash(key)].head.value[key];
    }
    else return null;
  }


  contains(key){
    if(this.buckets[this.hash(key)]){
      return true;
    }
    return false;
  }


  hash(key) {
    // if(key!== null && typeof(key)=== String){
    return key.toString().split('').reduce((p,n) => {
      return p + n.charCodeAt(0);
    }, 0) * 599 % this.size;
  }
}


module.exports = { Hashtable };
      
