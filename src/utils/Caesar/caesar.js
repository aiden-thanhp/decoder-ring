// This is Caesar Shift algorithm

// Call an array of alphabets and create an array of letter and assigned Id
const alphabet = "abcdefghijklmnopqrstuvwxyz".split(""); 
const letters = alphabet.reduce((result, letter, index) => { 
  result.push({
      'letter': letter,
      'id': index + 1
  })
  return result;
}, []);

// Call an string with all symbols
const symbols = " ~`!@#$%^&*()-=_+{}[];:'<,>.?/"; 

// function to return an id from a letter
function callId(letters, letter) {
  const letterId = letters.filter(element => element.letter === letter)
                          .map(element => element.id).join("");
  return parseInt(letterId);
}

// function to return a letter from an id
function callLetter(letters, id) {
  return letters.filter(element => element.id === id)
                .map(element => element.letter).join("");
}

// caesar function accepts an input, a shift number, and a boolean for encode
export function caesar(input, shift, encode = true) {
  if (shift === 0 || shift < -25 || shift > 25) return "Shift number needs to be between -25 and 25 and not 0";
  else {
    if (!encode) shift = -shift;
    
    const inputArray = input.toLowerCase().split(""); 
    let outputArray = []; 
    inputArray.forEach(char => {
      
      if (!symbols.includes(char)) {
        const currentId = callId(letters, char); 
        let newId = currentId + shift;  
        if (newId > 26) newId -= 26; 
        if (newId < 1) newId += 26; 
        const newChar = callLetter(letters, newId); 
        outputArray.push(newChar); 
      } else { outputArray.push(char); } 
      
    });
    return outputArray.join("");
  }
}