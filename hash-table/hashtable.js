'use strict';

class Hashtable {
  constructor(size=42){
    this.buckets =  new Array(size);
    this.size = size;
  }



  add(key,value){

    let index = this.hash(key);

    if(!this.buckets[index]){
      this.buckets[index] = [];
    }

    this.buckets[index].push([key,value]);
    // console.log(index);

    return index;
  }


  get(key){

    // index of the bucket
    let index = this.hash(key);

    // if there is no bucket
    if(!this.buckets[index])return null;

    for(let bucket of this.buckets[index]){
      // if key  matches
      if(bucket [0] === key){
        // value
        return bucket [1];
      }
    }
  }


  contains(key){
    if(this.map[this.hash(key)]){
      return true;
    }
    return false;
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
      
