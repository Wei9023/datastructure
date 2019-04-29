// Adding a key/value to your hashtable results in the value being in the data structure
// Retrieving based on a key returns the value stored
// Successfully returns null for a key that does not exist in the hashtable
// Successfully handle a collision within the hashtable
// Successfully retrieve a value from a bucket within the hashtable that has a collision
// Successfully hash a key to an in-range value

'use strict';

const { Hashtable } = require('../hashtable.js');

describe('Hashtable', () => {

  it('Adding a key/value to your hashtable results in the value being in the data structure', () => {
    let ht = new Hashtable();
    let key = 'hello';
    let value = 'hello';
    ht.add(key, value);
    let index = ht.hash(key);
    console.log(ht.buckets[index]);
    expect(ht.buckets[index][0][1]).toEqual('hello');
  });
  
  it('Retrieving based on a key returns the value stored', () => {
    let ht = new Hashtable();
    let key = 'hello';
    let value = 'hello';
    ht.add(key, value);
    let result = ht.get(key);
    expect(result.includes(value)).toBeTruthy();
  });

  it('Successfully returns null for a key that does not exist in the hashtable ', () => {
    let ht = new Hashtable();
    let key = 'hello';
    let result = ht.get(key);
    expect(result).toBeNull();
  });

  it('Successfully handle a collision within the hashtable ', () => {
    let ht = new Hashtable();
    let key = 'hello';
    let value = 'hello';
    ht.add(key, value);
    ht.add(key, value);
    let result = ht.get(key);
    expect(result.length).toBe(5);
  });

  it('Successfully retrieve a value from a bucket within the hashtable that has a collision ', () => {
    let ht = new Hashtable();
    let key = 'hello';
    let value = 'hello';
    ht.add(key, value);
    ht.add(key, value);
    let result = ht.get(key);
    expect(result.length).toBe(5);
  });

  it('Successfully hash a key to an in-range value ', () => {
    let ht = new Hashtable();
    let key = 'hello';
    let hash = ht.hash(key);
    expect(hash).toBeGreaterThanOrEqual(0);
    expect(hash).toBeLessThanOrEqual(1024);
  });
});