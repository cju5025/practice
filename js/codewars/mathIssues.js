Math.round = function(number) {
  let inputArray = Number.isInteger(number) ? wholeNumberToArray(number) : decimalToArray(number)
  if (inputArray[1]) {
    inputArray[1] = inputArray[1].length > 1 ? inputArray[1][0] : inputArray[1]
  }
  inputArray = parseStringArray(inputArray)
  return inputArray[1] >= 5 ? inputArray[0] + 1 : inputArray[0]
};
  
Math.ceil = function(number) {
  let inputArray = Number.isInteger(number) ? wholeNumberToArray(number) : decimalToArray(number)
  inputArray = parseStringArray(inputArray)
  return inputArray[1] ? inputArray[0] + 1 : inputArray[0]
};
  
Math.floor = function(number) {
  let inputArray = Number.isInteger(number) ? wholeNumberToArray(number) : decimalToArray(number)
  inputArray = parseStringArray(inputArray)
  return inputArray[0]
};

const decimalToArray = (number) => {
  return number.toString().split(".")
};

const wholeNumberToArray = (number) => {
  return number.toString().split("")
};

const parseStringArray = (arrayOfStrings) => {
  return arrayOfStrings.map(e => {
    return parseInt(e)
  })
};

  console.log(Math.round(2.4))
  console.log(Math.round(2.8))
  console.log(Math.round(6.48))
  console.log(Math.ceil(2.8))
  console.log(Math.ceil(2.8))
  console.log(Math.ceil(9))
  console.log(Math.floor(2.8))
  console.log(Math.floor(2.8))