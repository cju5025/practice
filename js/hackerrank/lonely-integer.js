const input = [0,0,1,2,1]

const lonelyInteger = (a) => {
    for (let i = 0; i < a.length; i++){
        let currentInt = a[i]
        a.splice(i, 1)
        if (a.includes(currentInt)){
            a.splice(i, 0, currentInt)
        } else {
            return currentInt
        }
    }
}

console.log(lonelyInteger(input))