function insertionSort(n, arr) {
    for (let i = 0; i < arr.length; i++){
        splicer(arr)
        console.log(arr.join(' '))
        }
    }

function splicer(arr){
    for (let i = 1; i < arr.length; i++){
        if (arr[i] < arr[i-1]){
            arr.splice(i - 1, 0, arr[i])
            arr.splice(i + 1, 1)
        }
    }
    return arr
}

console.log(insertionSort(7, [3,4,7,5,6,2,1]))