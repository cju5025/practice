Math.round = function(number) {
  let inputArray = Number.isInteger(number) ? wholeNumberToArray(number) : decimalToArray(number)
  inputArray = parseStringArray(inputArray)
  return inputArray[1] >= 5 ? inputArray[0] + 1 : inputArray[0]
};
  
Math.ceil = function(number) {
  let inputArray = Number.isInteger(number) ? wholeNumberToArray(number) : decimalToArray(number)
  inputArray = parseStringArray(inputArray)
  return inputArray[0] + 1
};
  
Math.floor = function(number) {
    return 0; // TODO: fix this
};

const decimalToArray = (number) => {
  return number.toString().split(".")
}

const wholeNumberToArray = (number) => {
  return number.toString().split("")
}

const parseStringArray = (arrayOfStrings) => {
  return arrayOfStrings.map(e => {
    return parseInt(e)
  })
}




  console.log(Math.round(2.4))
  console.log(Math.round(2.8))
  console.log(Math.ceil(2.8))
  console.log(Math.ceil(2.8))