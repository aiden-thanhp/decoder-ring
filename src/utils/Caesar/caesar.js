const alphabet = "abcdefghijklmnopqrstuvwxyz".split(""); //call the alphabets array
const letters = alphabet.reduce((result, letter, index) => { //create an array of letters and id
  result.push({
      'letter': letter,
      'id': index + 1
  })
  return result;
}, []);
const symbols = " ~`!@#$%^&*()-=_+{}[];:'<,>.?/"; //define an array with all symbols

function callId(letters, letter) { //return id as an integer from a given letter
  const letterId = letters.filter(element => element.letter === letter)
                          .map(element => element.id).join("");
  return parseInt(letterId);
}

function callLetter(letters, id) { //return letter as a string from a given id
  return letters.filter(element => element.id === id)
                .map(element => element.letter).join("");
}

export function caesar(input, shift, encode = true) {
  if (shift === 0 || shift < -25 || shift > 25) return "Something went wrong";
  else {
    if (!encode) shift = -shift;
    
    const inputArray = input.toLowerCase().split(""); //turn the input into an array with all lower cases
    let outputArray = []; //define the new output array as empty
    inputArray.forEach(char => { //loop through the inputArray
      
      if (!symbols.includes(char)) { //if character is not symbols
        const currentId = callId(letters, char); //get id for current character
        let newId = currentId + shift;  //shift the id
        if (newId > 26) newId -= 26; //if shift too far right, get back to the first letter
        if (newId < 1) newId += 26; //if shift too far left, get back to the last letter
        const newChar = callLetter(letters, newId); //get the new character
        outputArray.push(newChar); //push the new character into the outputArray
      } else { outputArray.push(char); } //leave symbols as is
      
    });
    return outputArray.join(""); //return the new string
  }
}