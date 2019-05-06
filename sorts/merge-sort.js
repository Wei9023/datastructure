'use strict';

const Merge = {
  merge: function (leftArr, rightArr) {
    var sortedArr = [];
    while (leftArr.length && rightArr.length) {
      if (leftArr[0] <= rightArr[0]) {
        sortedArr.push(leftArr[0]);
        leftArr = leftArr.slice(1);
      } else {
        sortedArr.push(rightArr[0]);
        rightArr = rightArr.slice(1);
      }
    }
    while (leftArr.length)
      sortedArr.push(leftArr.shift());
    while (rightArr.length)
      sortedArr.push(rightArr.shift());
    return sortedArr;
  },
        
  mergesort: function (arr) {
    if (arr.length < 2) {
      return arr; }
    else {
      var midpoint = parseInt(arr.length / 2);
      var leftArr   = arr.slice(0, midpoint);
      var rightArr  = arr.slice(midpoint, arr.length);
      return Merge.merge(Merge.mergesort(leftArr), Merge.mergesort(rightArr));
    }
  },
    
};

module.exports= Merge;
