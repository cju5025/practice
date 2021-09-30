const input = [0,0,1,2,1]

function lonelyinteger(a) {
    let counter = 0
    for (let i = 0; i < a.length; i++){
        for (let j = i + 1; j < a.length; j++){
            if (a[i] === a[j]){
                counter += 1
            }
            console.log(counter)
            if (counter === 0){
                return a[i]
            }
            counter = 0
        }
    }
}

console.log(lonelyinteger(input))