'use strict';

const {Hashtable} = require('../hash-table/hashtable.js');

const repeatedWord = (string) => {
  if (typeof(string) !== 'string'){
    return null;
  }
  let lowercase = string.toLowerCase();
  let words = lowercase.split(/[ ?!,.]+/);
  let dictionary = new Hashtable(1024);
  for( let i = 0; i < words.length; i++){
    if( dictionary.get(words[i]) ) {
      return words[i];
    } else {
      dictionary.add(words[i],words);
    }
  }
  return null;
};

module.exports = {repeatedWord};