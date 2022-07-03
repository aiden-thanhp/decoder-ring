 // This is Substitution algorithm

// Call an array of alphabets array
const alphabets = "abcdefghijklmnopqrstuvwxyz".split(""); 

// define a function to check if the alphabet key is unique
function isUnique(string) {
  const charCount = {};
  for (let i = 0; i < string.length; i++) {
    if (charCount[string[i]] != null) {
      charCount[string[i]] = 1;
      return false
    } else {
      charCount[string[i]] = 0;
    }
  }
  return true;
}

// assign id to the alphabet
function assignSub(alphabet) {
  const subArray = alphabet.split("");
  const letters = alphabets.reduce((result, letter, index) => {
    result.push({
        'letter': letter,
        'id': subArray[index]
    })
    return result;
  }, []);
  letters.push({
    'letter': " ",
    'id': " "
  })
  return letters;
}

// call a substitution from the main letter
function callSub(letters, letter) {  
  return letters.filter(element => element.letter === letter)
                .map(element => element.id).join("");
}

// call the main letter from the substitution
function callLetter(letters, sub) { 
  return letters.filter(element => element.id === sub)
                .map(element => element.letter).join("");
}

// substitution function accepts an input, alphabet key and an boolean for encoding
export function substitution(input, alphabet, encode = true) {
  if (!alphabet
      || alphabet.length != 26
      || !isUnique(alphabet)) return "Your alphabet key does not have enough of 26 unique characters";
  let outputArray = [];
  const letters = assignSub(alphabet);
  if (encode) {
    outputArray = input.toLowerCase().split("").reduce((result, char) => {
      result.push(callSub(letters, char));
      return result;
    }, []);
  } else {
    outputArray = input.toLowerCase().split("").reduce((result, char) => {
      result.push(callLetter(letters, char));
      return result;
    }, []);
  }
  return outputArray.join("");
}