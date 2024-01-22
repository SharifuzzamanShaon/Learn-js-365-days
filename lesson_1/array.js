// const fruits = "Mango Banana Pineapple Strawbarry";
// const arr = ["Pineapple", "Strawbarry"];



// for (i = 0; i < arr.length; i++) {
//     document.getElementById("fruits").innerHTML = arr[i];
// }

// function myFun(value) {
//     console.log(value);
// }
// arr[arr.length] = "Mango"
// console.log(arr);

const arr = ["Pineapple", "Strawbarry"];
const obj = { name: "Shaon", age: 20 }

// console.log(typeof arr);
// console.log(typeof obj);

// console.log(Array.isArray(arr));
// console.log(obj instanceof Object);

// console.log(arr.toString());

// const a= arr.pop();

// console.log(a);

// const array = [{ name: "shaon" }, { name: "jdkl" }]
// const array = ["ksj", 09, true]
// const object = { name: "robin", age: 45, id: "124oi12", active: true }

// const sum = (a, b) => { a + b };
// const sub = (a, b) => { a - b };
// const mul = (a, b) => { a * b };
// const div = (a, b) => { a / b };


// const funcs = [sum, sub, mul, div];

// const a = 45, b = 10;

// for (let i = 0; i < funcs.lenght; i++) {
//     const value = funcs[i](a, b);
//     console.log(value)
// }

// const arr1 = [1,2,4];
// const arr2 = [5,6,7,8];
// const arr3 = [9,10,11,12];

// arr1.push(...arr2, ...arr3);

// console.log(arr1);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.reverse();
// console.log(fruits);

const array = [45, 78, 66, 20, 30];

//MAP
// function myFun(v) {
//     return v + 10
// }

// const newArr = array.map(myFun);

// console.log(newArr);


//FILTER

// function myFun(value, index, array){
//     return (ele =index, value> 50)
// }

// const newArr = array.filter(myFun);

// console.log(newArr);

//REDUCE


// function myFun(total, value, index, array) {
//     console.log(total);
//     return total + value
// }

// const newArr = array.reduce(myFun);

// console.log(newArr);

// const obj2 = { name: {}, age: {}, color: {} }



// OBJECT TO AN ARRAY =================
// const formData = {
//     name: {
//         type: "text",
//         placeholder: "Your name",
//         lebel: "Enter your name"
//     },
//     email: {
//         type: "email",
//         placeholder: "Your email",
//         lebel: "Enter your email"
//     },
//     phone: {
//         type: "text",
//         placeholder: "Your phone No.",
//         lebel: "Your phone No."
//     },
//     password: {
//         type: "password",
//         placeholder: "Your Pass.",
//         lebel: "Your Password"
//     }
// }

// function myArray(obj) {
//     return Object.keys(obj).map((item)=>{
//         return(
//             {
//                 name:item,
//                 ...obj[item]
//             }
//         )
//     })
//     // const objs = Object.keys(obj);
//     // const arr = objs.map((item) => {
//     //     return (
//     //         {
//     //             name: item,
//     //             type: obj[item].type
//     //         }
//     //     )
//     // })
//     // return arr;
// }

// console.log(myArray(formData));

// EVERY

// function myFun(value, index, array) {

//     return value > 0;
// }

// const newArr = array.every(myFun);

// console.log(newArr);

// ///REDUCE

// const product = {
//     tee: {
//         id: 120,
//         price: 522,
//     },
//     mug: {
//         id: 120,
//         price: 100,
//     },
//     headphone: {
//         id: 120,
//         price: 633,
//     },
//     hoodie: {
//         id: 120,
//         price: 200,
//     }
// }

// const ressult = Object.keys(product).map((item) => { return { name: item, ...product[item] } });
// console.log(ressult);

/////
// const value = [55,75,63,52,30];

// const result = value.some((item)=>{
//         return item >50;
// })
// console.log(result);

// Const decla

const car = ["Banana", "Orange", "Apple", "Mango"];

{
    const car = ["Orange", "Apple", "Mango"];
}

console.log(car[0]);

// Banana 