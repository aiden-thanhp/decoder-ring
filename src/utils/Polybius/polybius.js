// This is Polybius algorithm

// Call an array of alphabets and create an array of letter and assigned Id
const alphabet = "abcdefghiklmnopqrstuvwxyz".split("");

//create a grid array with all ids for each letter
const grid = [1, 2, 3, 4, 5]; 
const idArray = []; 
  grid.forEach(verticalEle => {
      grid.forEach(horizontalEle => {
          idArray.push(`${horizontalEle}${verticalEle}`)
      });
  });

const letters = alphabet.reduce((result, letter, index) => {
  result.push({
      'letter': letter,
      'id': idArray[index]
  })
  return result; 
}, []);

// function to call id from a letter
function callId(letters, letter) { 
  if (letter === " ") return " "; 
  else {
    if (letter === "j") letter = "i"; 
    return letters.filter(element => element.letter === letter)
                  .map(element => element.id).join("");
  }
}

// function to call a letter from an id
function callLetter(letters, id) { 
  if (id === " ") return " "; 
  else {
    let result = letters.filter(element => element.id === id)
                        .map(element => element.letter).join("");
    //return both i and j for id 42
    if (result === 'i') result = '(i/j)'; 
    return result;
  }
}

// function to check if decoding message has even length
function checkDecodingLength(input) { 
  const splitArray = input.split(" ");
  return splitArray.every((element) => element.length % 2 === 0)
}

// function to return an array of each pair of id including space
function splitDecodingInput(input) { 
  const splitArray = input.split(" ");
  const resultArray = [];
  splitArray.forEach(element => {
    for (let i = 0; i < element.length; i += 2) {
      resultArray.push(`${element[i]}${element[i + 1]}`);
    }
    resultArray.push(' ');
  });
  resultArray.pop();
  return resultArray;
}

// polybius function accepst an input and a boolean for encode
export function polybius(input, encode = true) {
  if (!encode) {
    if (!checkDecodingLength(input)) return "You need to have a even amount of numbers"; 
    else {
      // decoding funciton
      const decodingArray = splitDecodingInput(input); 
      const output = decodingArray.reduce((result, id) => { 
        result.push(callLetter(letters, id));
        return result;
      }, [])
      return output.join("");
    }
  } else {
    // encoding function
    const output = input.toLowerCase().split("").reduce((result, letter) => { 
      result.push(callId(letters, letter));
      return result;
    }, []);
    return output.join("");
  }
}