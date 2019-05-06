'use strict';

const { mergesort } = require('../merge-sort.js');

describe('mergesort', () => {

  it('A randomly generated unsorted array returns the array sorted', () => {
    
    expect(mergesort([1,3,5])).toEqual([1,3,5]);
  });

  it('A randomly generated unsorted array returns the array sorted', () => {
    let arr = [];
    for( let i = 0; i< 5; i++){
      arr[i] = Math.random()*10;
    }
    expect(mergesort(arr)[1]< mergesort(arr)[3]).toBeTruthy();
  });

  it('A sorted array returns the same sorted array', () => {
    let arr = [1,2,3,4,5,6];
    expect(mergesort(arr)).toEqual([1,2,3,4,5,6]);
  });

  it('A backwards-sorted array returns the array sorted', () => {
    let arr = [5,3,1];
    expect(mergesort(arr)).toEqual([1,3,5]);
  });

  it('An empty array returns the same empty array', () => {
    let arr = [];
    expect(mergesort(arr)).toEqual([]);
  });

  it('An array of one element returns the same single-element array', () => {
    let arr = [1];
    expect(mergesort(arr)).toEqual([1]);
  });
  
});