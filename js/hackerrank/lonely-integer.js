const input = [0,0,1,2,1]

const lonelyinteger = (a) => {
    let inputString = a.toString()

    for (let i = 0; i < inputString.length; i++){
        if (inputString.replaceAll(inputString[i], "").length === inputString.length - 1){
            return inputString[i]
        }
    }
}

console.log(lonelyinteger(input))