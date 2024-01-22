//Function
// const obj = {
//     name: "Saimon",
//     abc(){
//         setTimeout(() => {
//             console.log(this.name);
//         }, 1000)
//     }
// }
// obj.abc();

//Object destructring

// const arr = [10, 85, 99];

// let [a, b, c] = arr;
// console.log(b);

// const obj = {
//     name: "saimon",
//     age: 10,
//     id: "id_1245"
// }

// const { name, age, id } = obj;

// console.log(id);


// Default parameter 


// function abc(a=1,b=1){
//    return a*b;
// }

// console.log(abc(10,10));

// Spread & rest ope.


// function add(...num){
//     return num.reduce((a,b)=>a+b);
// }
// let sum = add(1,4,6,7)
// console.log(sum);

//

const number = [1,7,8,6,5,2];
// const val = [12,78,755];
// console.log( [...number,...val]);

// var obj = {
//     name:"ihfihd",
//     roll: 45
// }
// var obj2= {
//     ...obj,
//     district: "bogura",
// }
// console.log({...obj2});

// class People{
//     constructor(name, email){
//         this.name=name,
//         this.email=email
//     }
//     details(){
//         console.log(`Your name ${this.name} and email is ${this.email}`);
//     }
// }


// class Student extends People{
//     constructor(name, email,id){
//         super(name, email);
//         this.id=id
//     }
//     print(){
//         console.log(`Your name ${this.name} and email is ${this.email} id: ${this.id}`);
//     }
// }


// const p1 =new Student('saimon','sainion@gmail.com','90');

// p1.print();


// globalThis.setTimeout(()=> console.log("a"), 1000)


// Nulish qualashing operator

let value;
value = "";

console.log(value ?? 'javaScript');
console.log(value || 'javaScript');