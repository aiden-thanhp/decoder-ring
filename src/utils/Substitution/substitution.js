const alphabets = "abcdefghijklmnopqrstuvwxyz".split(""); 

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

function callSub(letters, letter) {  
  return letters.filter(element => element.letter === letter)
                .map(element => element.id).join("");
}

function callLetter(letters, sub) { 
  return letters.filter(element => element.id === sub)
                .map(element => element.letter).join("");
}

export function substitution(input, alphabet, encode = true) {
  if (!alphabet
      || alphabet.length != 26
      || !isUnique(alphabet)) return false;
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