const wordSpinner = (string) => {
    stringArray = string.split(" ")

    for (let i = 0; i < stringArray.length; i++){
        if (stringArray[i].length > 4){
            stringArray[i] = stringArray[i].split("").reverse().join("")
        }
    }

    return stringArray.join(" ")
}


console.log(wordSpinner("What is up vanilla face"))