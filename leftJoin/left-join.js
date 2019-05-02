'use strict';


module.exports = ( ht1, ht2) => {
  if(!ht1|| !ht2){return null;}

  ht1.buckets.forEach(item => {
    if(ht2.contains(Object.keys(item.head.value)[0])){
      ht1.add(Object.keys(item.head.value)[0], ht2.get(Object.keys(item.head.value)[0]));
    }
  });
  return ht1;
};

 