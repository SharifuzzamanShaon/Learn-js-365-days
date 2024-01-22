// const a=12, b=2;

// const add=()=>{
//  return 4+4;
// }
// console.log(add());


// function demo() {

//     const x = 10;
//     {
//         let x = 50;
//         console.log(x);
//     }
//     x = 80;
//     console.log(x);
// }
// console.log(demo());


// const arithmeticOpe = (operation) => {
//     const f =new Function('operation',
//      `return ${inputValue.a} ${operation} ${inputValue.b}`);
//     // console.log(f);
//     console.log(f(operation));
// }


// const data ={
//     name:"Shaons",
//     age:22
// }

// console.log(eval(`${2}+${34}`));


// const val = [{ 1: "a" }, { 2: "b" }, { 3: "c" }, { 4: "d" }, { 5: "e" }];
// val.map((item, i) => (
//     console.log(item),
//     console.log(i)
// ));
// console.log(val.length);

// const arr = [a,b,c,f,g,k,d,j,q,w,r,t,y,u,m];
// const arr1=[3,4,6,1,9,2];
// arr1.sort(function(a, b){
//     return b-a;
// })
// console.log(arr1);

// const arr = ["abc","xyx","120"];
// const newArr = [...arr];
// newArr.push("OOP");

// console.log(arr);
// console.log(newArr);

const array = [{ name: 'robin' }]
const result = array.map((item) =>({name: item.name}))

console.log(result);