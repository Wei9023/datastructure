'use strict';

const {Hashtable} = require('../../hash-table/hashtable.js');
const leftJoin = require('../left-join.js');

describe('Hashtable', () => {

  it('should successful left join two hashtables', () => {
    let ht1 = new Hashtable(1024);
    let ht2 = new Hashtable(1024);
        
    ht1.add('fond', 'enamored');
    ht1.add('wrath', 'anger');
    ht1.add('outift', 'garb');
    console.log(ht1);
  
    ht2.add('fond', 'averse');
    ht2.add('wrath', 'delight');
    ht2.add('flow', 'jam');
    let htExpected = new Hashtable(1024);

    htExpected.add('fond', 'enamored');
    htExpected.add('wrath', 'anger');
    htExpected.add('outift', 'garb');
    htExpected.add('fond', 'averse');
    htExpected.add('wrath', 'delight');

    console.log(htExpected);
    console.log(leftJoin(ht1,ht2));
    expect(leftJoin(ht1,ht2)).toEqual(htExpected);
  });

  it('Should return null if given only a left table', () => {
    let ht1 = new Hashtable(1024);
    let ht2 = new Hashtable(1024);
        
    ht1.add('fond', 'enamored');
    ht1.add('wrath', 'anger');
    ht1.add('outift', 'garb');
    console.log(ht1);
  
    ht2.add('fond', 'averse');
    ht2.add('wrath', 'delight');
    ht2.add('flow', 'jam');
    expect(leftJoin(ht1)).toEqual(null);
  });
  it('Should return the left table if given an empty right table', () => {
    let ht1 = new Hashtable(1024);
    let ht2 = new Hashtable(1024);
        
    ht1.add('fond', 'enamored');
    ht1.add('wrath', 'anger');
    ht1.add('outift', 'garb');
    console.log(ht1);
  
    ht2.add('fond', 'averse');
    ht2.add('wrath', 'delight');
    ht2.add('flow', 'jam');
    let emptyTable = new Hashtable(1024);
    expect(leftJoin(ht1, emptyTable)).toEqual(ht1);
  });
});