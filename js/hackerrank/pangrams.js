const pangram = (string) => {
    const alphabet = " abcdefghijklmnopqrstuvwxyz"
    let status = true

   string = lowerCaser(string)

    alphabet.split("").forEach(char => {
        if (!string.split("").includes(char)){
            status = false
            return
        }
    })
    return status ? "pangram" : "not pangram"
}

const lowerCaser = (s) => {
    return s.split("").map(char => char.toLowerCase()).join("")
}

console.log(pangram("We promptly judged antique ivory buckles for the next prize"))
console.log(pangram("We promptly judged antique ivory buckles for the prize"))
