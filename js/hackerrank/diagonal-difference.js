const input = 
[
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
]

const diagonalDifference = (a) => {
    let rightDiagonalSum = 0
    let leftDiagonalSum = 0
    let absoluteDifference = 0

    for (let i = 0; i < a.length; i++){
        rightDiagonalSum += a[i][i]
        leftDiagonalSum += a[i][(a.length - 1) - i]
    }

    return Math.abs(rightDiagonalSum - leftDiagonalSum)
}

console.log(diagonalDifference(input))