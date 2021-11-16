Math.round = function(number) {
  let inputArray = number.toString().split(".")
  inputArray = parseStringArray(inputArray)
  return inputArray[1] >= 5 ? inputArray[0] + 1 : inputArray[0]
};
  
Math.ceil = function(number) {
    return 0; // TODO: fix this
};
  
Math.floor = function(number) {
    return 0; // TODO: fix this
};

const parseStringArray = (arrayOfStrings) => {
  return arrayOfStrings.map(e => {
    return parseInt(e)
  })
}




  console.log(Math.round(2.4))
  console.log(Math.round(2.8))