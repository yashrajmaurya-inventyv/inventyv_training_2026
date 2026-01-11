# JavaScript Ques — Problems & Solutions ✅

A short collection of three small JavaScript exercises with the original code as answers. Each entry contains the problem statement, the solution (code), and a short note about expected output and how to run it.

---

## 1) Sum with arrays (`array.js`) 🔧

**Question:**
Given an array [1, 2, 3, 4, 5], remove the first element and pass it to another function. In that function, create a second array [6, 7, 8, 9, 10], add the passed value to the start, concat the remaining elements, and return the sum of all elements. Use a Promise that resolves with "Promise Solved" if the sum is greater than 35, otherwise rejects.

**Code (answer):**
```js
function fun1() {
    let arr = [1, 2, 3, 4, 5];
    let firVal = arr.shift()
    return fun2(firVal, arr)
}

function fun2(firVal, arr1) {
    let arr2 = [6, 7, 8, 9, 10];
    arr2.unshift(firVal);
    arr2 = arr2.concat(arr1)
    return arr2.reduce((acc,val) => acc+val,0);
}

const pr = new Promise((resolve, reject) => {
    const sum = fun1()
    if(sum>35){
        resolve("Promise Solved")
    }else{
        reject('Promise Rejected')
    }
});

pr.then((res) => console.log(res))
```

**output:**
`Promise Solved`  (sum is 55)

---

## 2) Sum with Symbols (`symbol.js`) ✨

**Question:**
Repeat the same logic as the first problem, but use Symbol to create the values (use numeric keys). Convert the symbol keys back to numbers and compute the total sum. Use a Promise to resolve/reject based on the sum.

**Code (answer):**
```js
function fun1(){
    let arr = [
        Symbol.for(1),
        Symbol.for(2),
        Symbol.for(3),
        Symbol.for(4),
        Symbol.for(5),
    ]
    let firVal = arr.shift()
    return fun2(firVal,arr)
}

function fun2(firVal, arr){
    let arr2 = [
        Symbol.for(6),
        Symbol.for(7),
        Symbol.for(8),
        Symbol.for(9),
        Symbol.for(10),
    ]
    arr2.unshift(firVal)
    arr2 = arr2.concat(arr)
    return arr2.reduce((acc,curr) => acc+ Number(Symbol.keyFor(curr)), 0)
}

const pr = new Promise((resolve, reject) => {
    const sum = fun1()
    if(sum>35){
        resolve("Promise Solved")
    }else{
        reject('Promise Rejected')
    }
});

pr.then((res) => console.log(res))
```

**output:**
`Promise Solved`  (Symbol keys converted to numbers give the total 55)

---

## 3) Task-3 (pattern) 🎨

**Question:**
Read an integer `n` from stdin and print a pattern where each cell value is the distance-based minimum (plus one), forming concentric layers from the edges toward the center.

**Code (answer):**
```js
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter value of n: ', (input) => {
    for (let i = 1; i <= input; i++) {
        for (let j = 1; j <= input; j++) {
            min_val = Math.min(i, j, input - i + 1, input - j + 1);
            console.log(min_val);
        }
    }
    rl.close()
})
```


