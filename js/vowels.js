function vowels(str) {
  var vowels = ['a','e','i','o','u'];
  let count = 0;
  for (let char of str.toLowerCase()){
    if (vowels.includes(char)){
      count++;
    }
  }
  return count;
}

module.exports = vowels;
