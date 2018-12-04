function maxChar(str) {
  const chars = {};
  let max = 0;
  let maxChar = '';
  for (let char of str){
    if (chars[char]){
      chars[char]++;
    }
    else{
      chars[char] = 1;
    }
  }

  for (let char in chars){
    if (chars[char] > max){
      max = chars[char];
      maxChar = char;
    }
  }
  return maxChar;
}
