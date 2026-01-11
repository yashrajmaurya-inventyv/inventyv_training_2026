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