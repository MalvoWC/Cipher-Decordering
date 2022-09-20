// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    //if there is no alphabet, the alphabet is not 26 characters return false
    if(!alphabet) return false
    if(alphabet.length !== 26) return false
    // if there are any duplicates, return false
    if(Array.from(new Set(alphabet)).length !== 26) return false
    //create variables for the alphabet, to make all letters lowercase
    let abc = "abcdefghijklmnopqrstuvwxyz"
    //use split seperate the alphabet into an array
    alphabet = alphabet.split('')
    //make all letters lowercase to ignore capitalization
    input = input.toLowerCase()
    //create variables to hold your decode, to return a string, and to hold your letters that are mapped
    let map = {}
    let decode = {}
    let result = ''
    // use .split() to seperate each letter for abc 
    // use the .forEach method to loop through the letter and index
    abc.split('').forEach((letter, index) => {
    //populate the map where the letter is the key and the value is alphabet[index]
      map[letter] = alphabet[index]
    //populate the decode where the alphabet[index] and the value is the letter
      decode[alphabet[index]] = letter
    })
    // if not encoding the map, then decode
    if(!encode) map = decode
    //.split() to seperate each letter for decode
    // loop through each input
    input.split('').forEach(input => {
    // if there is a space? return a space, otherwise return the map[input]
      result += input === ' ' ? ' ' : map[input]
    })
    return result
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
