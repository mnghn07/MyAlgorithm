function reverse(str) {
  const newArr = str.split("");
  newArr.reverse();
  return newArr.join("");
  // return str.split('').reverse().join('');
}

function reverse_2(str) {
  let reversed = '';
  for (let characters of str){
    reversed = characters + reversed;
  }
  return reversed;
}

function reverse_3(str) {
  debugger;
  return str.split('').reduce((reversed,characters)=>characters + reversed,'');
}
