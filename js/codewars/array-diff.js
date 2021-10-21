const arrayDiff = (a,b) => {
    var maxLength = Math.max(a.length, b.length)

    for (let i = 0; i < maxLength; i++){
        for (let j = 0; j < maxLength; j++){
            if (a[i] === b[j]){
                a.splice(i, 1)
                b.splice(j, 1)
                console.log(a)
                console.log(b)
            }
        }
    }
    // return (a, b)
}

console.log(arrayDiff([1,2,3], [1,2]))