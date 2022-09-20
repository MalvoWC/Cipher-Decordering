// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    //create a variable for letters where the keys are letters "a-z" and their values are there location in the Polybius Square
    //create a key value for an empty space " " inside the letters variable
    let alphabet = {
      a: "11", b: "21", c: "31", d: "41", e: "51", f: "12", g: "22", h: "32", i: "42", j: "42", k: "52", l: "13", m:"23", n: "33", 
      o: "43", p: "53", q: "14", r: "24", s: "34", t: "44", u: "54", v: "15", w: "25", x: "35", y: "45", z: "55", [' ']: " "
    };
    //create a variable where the keys are the values of each letter (reference the letter variable) and the value is the letter
    //create a key value for an empty space " " inside the letters variable
    let decoded = {
      11: "a", 21: "b", 31: "c", 41: "d", 51: "e", 12: "f", 22: "g", 32: "h", 42: "(i/j)", 52: "k", 13: "l",
      23: "m", 33: "n", 43: "o", 53: "p", 14: "q", 24: "r", 34: "s", 44: "t", 54: "u", 15: "v", 25: "w", 35: "x",
      45: "y", 55: "z", [' ']: " "
    }
    // if there is an encode, return the alphatbet
    if(encode) {
    // use the .split() method to split each individual letter, then use .map() to get each individual letter
      return input.split('').map(letter => {
    //since the "alphabet" variable is an object, return the alphabet and use .toLowerCase to access the value of that letter
        return alphabet[letter.toLowerCase()]
      }).join('')
    } 
    //creating decode
    else { 
    //remove spaces and check if the length is not even, if so return false
       if(input.replace(/\s/g,'').length %2 !== 0) return false
    //create a return that is going to check the input for a 2 digit number thats 0 - 9, or a space
    //use .map() take take the number from the return
      return input.match(/[0-9]{2}|\s/g).map(number => {
    // place that number from the return into the decoded
        return decoded[number]
    //use .join() to join all the strings together in the array
      }).join('')
    }
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
