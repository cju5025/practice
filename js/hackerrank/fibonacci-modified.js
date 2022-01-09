function fibonacciModified(t1, t2, n) {
    let t3

    for (let i = 0; i <= n - 3; i++){
        t3 = BigInt(t1 + (t2 * t2))
        t1 = BigInt(t2)
        t2 = BigInt(t3)
    }

    return t3

}

console.log(fibonacciModified(0,1,10))