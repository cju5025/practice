function insertionSort(n, arr) {

    let numToCompare = arr[arr.length - 1]

    for (let i = arr.length - 2; i >= 0; i--){
        if (numToCompare < arr[i]){
            arr[i + 1] = arr[i]
            console.log(arr.join(" "))

            if (i === 0 ) {
                arr[0] = numToCompare
                console.log(arr.join(" "))
            }
            
        } else if (numToCompare > arr[i]) {
            arr[i + 1] = numToCompare
            console.log(arr.join(" "))
            break
        } 
    }
}

console.log(insertionSort(5, [2,3,4,6,8,3]))
console.log(insertionSort(10, [2,3,4,5,6,7,8,9,10,1]))