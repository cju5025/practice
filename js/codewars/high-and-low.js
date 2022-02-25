const highAndLow = (string) => {
    const inputArray = string.split(" ")
    const arrayOfIntegers = letterToInteger(inputArray)
    let low = arrayOfIntegers[0]
    let high = arrayOfIntegers[0]

    for (let i = 0; i < arrayOfIntegers.length; i++){
        if (arrayOfIntegers[i] < low){
            low = arrayOfIntegers[i]
        }
        if (arrayOfIntegers[i] > high){
            high = arrayOfIntegers[i]
        }
    }
    return `${high} ${low}`
}

const letterToInteger = (array) => {
    return array.map(e => parseInt(e))
}

console.log(highAndLow("1 2 3 4 5"))