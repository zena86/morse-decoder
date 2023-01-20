const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  currstr = "";
  let array = [];
  for (var i = 0; i < expr.length; ++i) {
    currstr += expr[i];
    if (currstr.length == 10) {
      array.push(currstr);
      currstr = "";
    }
  }

  let symbolArr = [];
  for (i = 0; i < array.length; i++) {
    symbolArr.push(array[i].match(/.{1,2}/g));
  }

  let result = [];
  for (i = 0; i < symbolArr.length; i++) {
    for (j = 0; j < symbolArr[i].length; j++) {
      if (symbolArr[i][j] === "00") {
        symbolArr[i][j] = "";
      } else if (symbolArr[i][j] === "10") {
        symbolArr[i][j] = ".";
      } else if (symbolArr[i][j] === "11") {
        symbolArr[i][j] = "-";
      } else {
        symbolArr[i][j] = "";
      }
    }
    result.push(symbolArr[i].join(""));
  }

  return result
    .map((el) => {
      if (MORSE_TABLE[el] === undefined) {
        MORSE_TABLE[el] = " ";
      }
      return MORSE_TABLE[el];
    })
    .join("");
}

module.exports = {
  decode,
};
