function palindrome(str) {
  reversed = str.split('').reverse().join('');
  if (reversed == str){
    return true;
  }
  else {
    return false;
  }
}

function palindrome_2(str) {
  return str.split('').every((char,i)=>{
    return char === str[str.length - i - 1]
  });
}
