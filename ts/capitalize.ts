// #  --- Directions
// #  Write a function that accepts a string.  The function should
// #  capitalize the first letter of each word in the string then
// #  return the capitalized string.
// #  --- Examples
// #  capitalize('a short sentence') - -> 'A Short Sentence'
// #  capitalize('a lazy fox') - -> 'A Lazy Fox'
// #  capitalize('look, it is working!') - -> 'Look, It Is Working!'

export default function toTitleCase(str: string) {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
  });
}
