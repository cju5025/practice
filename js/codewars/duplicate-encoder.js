function duplicateEncoder(word){

    word = lowerCaser(word)

    return word

    for (let i = 0; i < word.length; i++){
        for (let j = 1; j < word.length; j++){
            if (word[i] === word[j]){
                word[i] === ")" && word[j] === "j"
            }
        }
    }
}

function lowerCaser(inputString){
    for (let i = 0; i < inputString.length; i++){
        inputString[i] = inputString[i].toLowerCase()
        return inputString[i]
    }
    return inputString
}


console.log(duplicateEncoder("Success"))