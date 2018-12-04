function buildCharMap(str) {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g,'').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

function anagrams(stringA, stringB) {
  const charA = buildCharMap(stringA);
  const charB = buildCharMap(stringB);

  if (Object.keys(charA).length !== Object.keys(charB).length){
    return false;
  }

  for (let char in charA) {
    if(charA[char] !== charB[char]) {
      return false;
    }
  }
  return true;
}

function anagrams_2(stringA, stringB) {
  //#2 solution
  const charA = stringA.replace(/[^\w]/g,'').toLowerCase();
  const charB = stringB.replace(/[^\w]/g,'').toLowerCase();

  let sortedA = charA.split('').sort();
  let sortedB = charB.split('').sort();
  if (sortedA.length !== sortedB.length){
    return false;
  }
  if (sortedA.join('') !== sortedB.join('')){
    return false;
  }
  return true;
}
