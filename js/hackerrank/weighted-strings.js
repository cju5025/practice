const weightedStrings = (string, queries) => {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    
    // a letters value is alphabet.split("").indexOf(letter)+1

    let kValue = alphabet.split("").indexOf("m") + 1
    return kValue
}


console.log(weightedStrings("abccddde", [6,1,3,12,5,9,10]))