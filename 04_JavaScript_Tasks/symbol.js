function fun1() {
    let arr = [
        Symbol.for(1),
        Symbol.for(2),
        Symbol.for(3),
        Symbol.for(4),
        Symbol.for(5),
    ]
    let firVal = arr.shift()
    return fun2(firVal, arr)
}

function fun2(firVal, arr) {
    let arr2 = [
        Symbol.for(6),
        Symbol.for(7),
        Symbol.for(8),
        Symbol.for(9),
        Symbol.for(10),
    ]
    arr2.unshift(firVal)
    arr2 = arr2.concat(arr)
    return arr2.reduce((acc, curr) => acc + Number(Symbol.keyFor(curr)), 0)
}

const pr = new Promise((resolve, reject) => {
    const sum = fun1()
    if (sum > 35) {
        resolve("Promise Solved")
    } else {
        reject('Promise Rejected')
    }
});

pr.then((res) => console.log(res)) 