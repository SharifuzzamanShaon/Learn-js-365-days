

// const number = [1, 2, 3, 4, 5];

// function sumFun(acc, cur, index) {
//     console.log(`Acc ${acc}- cur ${cur} - index ${index}`);
//     return acc + cur
// }

// const value = number.reduce(sumFun, 10)

// console.log(value);

// Acc 10- cur 1 - index 0
// Reduce.js:6 Acc 11- cur 2 - index 1
// Reduce.js:6 Acc 13- cur 3 - index 2
// Reduce.js:6 Acc 16- cur 4 - index 3
// Reduce.js:6 Acc 20- cur 5 - index 4

const array = [
    {
        id: 120,
        price: 522,
    },
    {
        id: 120,
        price: 100,
    },
    {
        id: 120,
        price: 633,
    },
    {
        id: 120,
        price: 200,
    }
]

const total = Object.keys(array).reduce((acc, cur) => {
    acc[cur] = {
        ...array[cur],
        value: ""
    }
    return acc
}, {})




console.log(total);

const convartToArray = (total) => {
    return Object.keys(total).map((key) => { return ({ ...total[key] }) })
}
console.log(convartToArray(total));

// var obj = {
//     name:"ihfihd",
//     roll: 45
// }
// var obj2= {
//     ...boj,
//     district: "bogura",
// }
// console.log({...obj2});



const arr=[1,2];

let abc = arr.reduce((num, curr)=> num +=curr);
console.log(abc);
