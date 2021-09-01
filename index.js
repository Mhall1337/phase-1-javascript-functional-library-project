function myEach(collection, callback){
    const vals = Object.values(collection)
    vals.forEach(callback)
    return collection
}

function myMap(collection, callback){
    const vals = Object.values(collection)
    return vals.map(element => callback(element))
}

function myReduce(collection, callback, acc){
    const vals = Object.values(collection)
   return vals.reduce(callback)
}

function myFind(collection, predicate){
    const vals = Object.values(collection)
    return vals.find(predicate)
}

function myFilter(collection, predicate){
    const vals = Object.values(collection)
    return vals.filter(predicate)
}

function mySize(collection){
   const vals = Object.values(collection)
   return vals.length
}

function myFirst(array, n){
    if (array == null) 
    return void 0;
  if (n == null) 
    return array[0];
  if (n < 0)
    return [];
  return array.slice(0, n);
}

function myLast(array, n){
    if (array == null) 
    return void 0;
  if (n == null) 
     return array[array.length - 1];
  return array.slice(Math.max(array.length - n, 0));
}

function myKeys(object){
    return Object.keys(object)
}

function myValues(object){
   return Object.values(object)
}