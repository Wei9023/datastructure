const {Hashtable} = require('../hash-table/hashtable.js');

const repeatedWord =(string)=>{
  let ht = new Hashtable();
  let array = string.split(' ');
  console.log(array);
  array.forEach(item => {
    if(!ht.get(item).includes(item)){
        ht.add(item,item);
    }else{
      return item;
    }
  });  
  
};

module.exports={repeatedWord};