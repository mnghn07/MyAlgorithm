// #  --- Directions
// #  Check to see if two provided strings are anagrams of eachother.
// #  One string is an anagram of another if it uses the same characters
// #  in the same quantity. Only consider characters, not spaces
// #  or punctuation.  Consider capital letters to be the same as lower case
// #  --- Examples
// #  anagrams('rail safety', 'fairy tales') - -> True
// #  anagrams('RAIL! SAFETY!', 'fairy tales') - -> True
// #  anagrams('Hi there', 'Bye there') - -> False

export default function anagrams(word1: string, word2: string) {
  const preProcessed1 = word1.replace(/[^\w+]/g, "").toLowerCase();
  const preProcessed2 = word2.replace(/[^\w+]/g, "").toLowerCase();

  const sorted1: string[] = preProcessed1.split("").sort();
  const sorted2: string[] = preProcessed2.split("").sort();

  if (sorted1.length !== sorted2.length) return false;
  if (sorted1.join("") === sorted2.join("")) return true;
  return false;
}

const mappingChar = (word: string) => {
  let charMap = {};
  const preProcessed = word
    .replace(/[^\w+]/g, "")
    .toLowerCase()
    .split("");
  preProcessed.map((char: string, index: number) => {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });
  return charMap;
};

function anagrams_2(word1: string, word2: string) {
  const map1 = mappingChar(word1);
  const map2 = mappingChar(word2);
  if (Object.keys(map1).length !== Object.keys(map2).length) return false;

  for (let key in map1) {
    if (map1[key] !== map2[key]) return false;
  }
  return true;
}
