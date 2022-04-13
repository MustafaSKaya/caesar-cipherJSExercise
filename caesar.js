const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const encrypt = function(plaintext, key) {
  let newText = "";
  if (plaintext.length === 1) {
    return alphabet.slice(alphabet.findIndex(element => element === plaintext) +key)[0];
  } else {
    for (let i = 0; i < plaintext.length; i++) {
      if (plaintext[i] === " ") {
        newText += " ";
      } else {
      newText += alphabet.slice((alphabet.findIndex(element => element === plaintext[i]) + key) % alphabet.length)[0];
      }
    }
  };
  return newText;
};

console.log(encrypt("e", -3));
console.log(encrypt("b", -3));
console.log(encrypt("hello", -3));
console.log(encrypt("hello world", 5)); //"mjqqt btwqi"

module.exports = { encrypt };
