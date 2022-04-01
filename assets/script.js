

function issuePrompts() {
  var passwordLengthReqAttn;
  var passwordLength = prompt("Your password may be between 8 and 128 characters long.  How long would you like your password to be?  (8 - 128)").toLowerCase();
  if (passwordLength === false) {
    return false;
  }
  while (passwordLengthReqAttn !== false) {
    if (passwordLength > 7 && passwordLength < 129) {
      passwordLengthReqAttn = false;
    } else {
      passwordLength = prompt("Password length unacceptable, please retry: Your password may be between 8 and 128 characters long.  How long would you like your password to be? Acceptable responses are: any integer from 8 to 128").toLowerCase();
    };//end if
  };//End While

  var containsUppersReqAttn;
  var containsUppersIncluded;
  var containsUppers = prompt("Would you like your password to include CAPITAL letters? ([Y]es / [N]o)").toLowerCase();
  if (containsUppers === false) {
    return false;
  }
  while (containsUppersReqAttn !== false) {
    if (containsUppers === "yes" || containsUppers === "no" || containsUppers === "y" || containsUppers === "n") {
      if (containsUppers === "yes" || containsUppers === "y") {
        containsUppersIncluded = true;
      } else {
        containsUppersIncluded = false;
      }
      containsUppersReqAttn = false;
    } else {
      containsUppers = prompt("Response regarding character CAPITALIZATION unacceptable, please retry: Would you like your password to include CAPITAL letters? Acceptable responses are: Yes, yes, No, no, Y, y, N, n").toLowerCase();
    };//end if
  };//End While

  var containsLowersReqAttn;
  var containsLowersIncluded;
  var containsLowers = prompt("Would you like your password to include lowercase letters? ([Y]es / [N]o)").toLowerCase();
  if (containsLowers === false) {
    return false;
  }
  while (containsLowersReqAttn !== false) {
    if (containsLowers === "yes" || containsLowers === "no" || containsLowers === "y" || containsLowers === "n") {
      if (containsLowers === "yes" || containsLowers === "y") {
        containsLowersIncluded = true;
      } else {
        containsLowersIncluded = false;
      }
      containsLowersReqAttn = false;
    } else {
      containsLowers = prompt("Response regarding lower case characters unacceptable, please retry: Would you like your password to include lowercase letters? Acceptable responses are: Yes, yes, No, no, Y, y, N, n").toLowerCase();
    };//end if
  };//End While

  var containsNumbersReqAttn;
  var containsNumbersIncluded;
  var containsNumbers = prompt("Would you like your password to include numbers? ([Y]es / [N]o)").toLowerCase();
  if (containsNumbers === false) {
    return false;
  }
  while (containsNumbersReqAttn !== false) {
    if (containsNumbers === "yes" || containsNumbers === "no" || containsNumbers === "y" || containsNumbers === "n") {
      if (containsNumbers === "yes" || containsNumbers === "y") {
        containsNumbersIncluded = true;
      } else {
        containsNumbersIncluded = false;
      }
      containsNumbersReqAttn = false;
    } else {
      containsNumbers = prompt("Response regarding inclusion of numbers unacceptable, please retry: Would you like your password to include numbers? Acceptable responses are: Yes, yes, No, no, Y, y, N, n").toLowerCase();
    };//end if
  };//End While

  var containsSymbolsReqAttn;
  var containsSymbolsIncluded;
  var containsSymbols = prompt("Would you like your password to include symbols? ([Y]es / [N]o)").toLowerCase();
  if (containsSymbols === false) {
    return false;
  }
  while (containsSymbolsReqAttn !== false) {
    if (containsSymbols === "yes" || containsSymbols === "no" || containsSymbols === "y" || containsSymbols === "n") {
      if (containsSymbols === "yes" || containsSymbols === "y") {
        containsSymbolsIncluded = true;
      } else {
        containsSymbolsIncluded = false;
      }
      containsSymbolsReqAttn = false;
    } else {
      containsSymbols = prompt("Response regarding inclusion of numbers unacceptable, please retry: Would you like your password to include symbols? Acceptable responses are: Yes, yes, No, no, Y, y, N, n").toLowerCase();
    };//end if
  };//End While

  const answeredQuestions = {
    password: {
      chosenLength: passwordLength
    },
    containsUppers: {
      isIncluded: containsUppersIncluded
    },
    containsLowers: {
      isIncluded: containsLowersIncluded
    },
    containsNumbers: {
      isIncluded: containsNumbersIncluded
    },
    containsSymbols: {
      isIncluded: containsSymbolsIncluded
    }
  };
  return answeredQuestions;
}


function generatePassword() {
  var answeredQuestions = issuePrompts();
  if (answeredQuestions === false) {
    return;
  }
  var includedArray = [];
  if (answeredQuestions.containsUppers.isIncluded) {
    includedArray.push('uppers');
  }
  if (answeredQuestions.containsLowers.isIncluded) {
    includedArray.push('lowers');
  }
  if (answeredQuestions.containsNumbers.isIncluded) {
    includedArray.push('numbers');
  }
  if (answeredQuestions.containsSymbols.isIncluded) {
    includedArray.push('symbols');
  };

  var characters = {
      uppers: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lowers: "abcdefghijklmnopqrstuvwxyz",
      numbers: "0123456789",
      symbols: "!@#$%^&*()_+~\\`|}{[]:;?><,./-="
  };
  var randomArrIndex;
  var newPassword = "";
  for (var i = 0; i < answeredQuestions.password.chosenLength; i++) {
    randomArrIndex = Math.floor(Math.random() * includedArray.length);
    if (includedArray[randomArrIndex] === "uppers") {
      newPassword = newPassword.concat(characters.uppers[Math.floor(Math.random() * characters.uppers.length)]);
    }
    else if (includedArray[randomArrIndex] === "lowers") {
      newPassword = newPassword.concat(characters.lowers[Math.floor(Math.random() * characters.lowers.length)]);
    }
    else if (includedArray[randomArrIndex] === "numbers") {
      newPassword = newPassword.concat(characters.numbers[Math.floor(Math.random() * characters.numbers.length)]);
    }
    else if (includedArray[randomArrIndex] === "symbols") {
      newPassword = newPassword.concat(characters.symbols[Math.floor(Math.random() * characters.symbols.length)]);
    }
  }
  return newPassword;
}


// Write password to the #password input
function writePassword() {
  var generatedPassword = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = generatedPassword;//this will write to page
}

// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", () => {writePassword()});

