// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    //If there is no shift or shift is less than -25, or greater than 25, return false
    if (!shift || shift < -25 || shift > 25) return false
    //set decode parameter and multiply it by -1 to have shift go in reverse
    if (!encode) shift *= -1
    //set inputs to lowercase to ignore capitalization
    //use .split() to split apart and maintain spaces inbetween letters
    //use map to put each letter into a seperate array
  return input.toLowerCase().split('').map(Letter => {
    //reference "ascii chart" for character codes
    //use .charCodeAt() for character code to get the character code for a number
    // if the letter's character code is < 97, return that letter
    if(Letter.charCodeAt(0) < 97) return Letter
    //create a variable for a letters character code "Letter.charCodeAt()" and turn "shift" into an integer "parseInt()"
    let num = Letter.charCodeAt(0) + parseInt(shift)
    // if at the end loop around the alphabet back to the beginning "after letter z" (end of alphabet is charCode 122)
    if(num > 122) {
      num = 96 + (num - 122)
    }
    //if the character code is less than 97 "beginning of character code", shift character code 
    else if(num < 97){
      num += 26
    }
    //in the return, use the ".String" method to turn your return into a string
    //then use .fromCharCode to get the character code and place it back into a number "num"
    return String.fromCharCode(num)
    //use .join() to join all the strings together in the array
  }).join('')
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
