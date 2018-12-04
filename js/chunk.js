function chunk(array, size) {
  //#1 solution
  const chunked = [];
  for (let item of array){
    if(!chunked[chunked.length - 1] || chunked[chunked.length - 1].length === size){
      chunked.push([item]);
    }
    else{
      chunked[chunked.length-1].push(item);
    }
  }
  return chunked;
}

function chunk_2(array, size) {
  //#2 solution
  const chunked=[];
  let index = 0;
  while(index < array.length){
    chunked.push(array.slice(index,index+size));
    index += size;
  }
  return chunked;
}
