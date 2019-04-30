'use strict';

const {repeatedWord }= require('../repeated-word.js');

describe('Hashtable', () => {

  it('Can out put the first repeated word', () => {
    let string = 'hi where are you hi';
    expect(repeatedWord(string)).toEqual('hi');
  });

  it('Can just out put the first repeated word', () => {
    let string = 'hi where are you hi you';
    expect(repeatedWord(string)).toEqual('hi');
  });

  it('Will not repeat if there is no word repeat', () => {
    let string = 'hi where are you now';
    expect(repeatedWord(string)).toBeFalsy();
  });
  
 
});