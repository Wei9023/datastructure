'use strict';

const { quickSort } = require('../quick-sort.js');


describe('quickSort', () => {

  it('A randomly generated unsorted array returns the array sorted', () => {
    let arr = [];
    for( let i = 0; i< 5; i++){
      arr[i] = Math.random()*10;
    }
    expect(quickSort(arr)[1]< quickSort(arr)[3]).toBeTruthy();
  });

  it('A sorted array returns the same sorted array', () => {
    let arr = [1,3,5];
    expect(quickSort(arr)).toEqual([1,3,5]);
  });

  it('A backwards-sorted array returns the array sorted', () => {
    let arr = [5,3,1];
    expect(quickSort(arr)).toEqual([1,3,5]);
  });

  it('An empty array returns the same empty array', () => {
    let arr = [];
    expect(quickSort(arr)).toEqual([]);
  });

  it('An array of one element returns the same single-element array', () => {
    let arr = [1];
    expect(quickSort(arr)).toEqual([1]);
  });
  
});