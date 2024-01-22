// function myFun(name) {
//     return 'Hello ' + name;
// }

// const fun = myFun; // set the referance 

// const fun1 =


//     console.log(fun);
// console.log(myFun("saimon"));

// //self envoking fun

// const sum = 10 + (function () { return 20 }());

// console.log(sum);


// // Inner and outer func

// function outer(a, b) {

//     function add() {
//         return a + b;
//     }
//     // add();
//     function mul() {
//         return a * b;
//     }
//     // mul();
//     return add(), mul();
// }

// console.log(outer(12, 5));

/// Return statement

// function ret(name, age) {
//     return {  // anthing can return 
//         name: name,
//         age: age
//     }
// }
// console.log(ret("saimon", 45));


// // Higher order function

// function calling(){
//     return function(name){
//         return 'Calling you ' + name;
//     }
// }

// var x= calling();

// console.log(x("Robmin"));


// Callback function
// const me = {
//     name:"Shaon",
//     age: 22,
//     email: "mdshaon2200@gmail.com"
// }


// function printInfo(person, callback){
//     console.log(person.name, person.age);
//     if(person.age >20){
//         callback(person.email);
//     }
// }

// printInfo(me, function(email){
//     console.log('eamil send to ' + email);
// })


// function host(){
//     console.log('From Host function');
//     return function(){
//         console.log("I am from child function");
//     }

// }
// var x = host();
// x();
// console.log(host());

// const multiply = new Function('x', 'y', 'return x * y');  
// console.log(multiply(2, 5));


//  Generate ID just using function and  while loop as like 1,2,3,...

function* generateNumbers() {
    let i = 0;
    while (true) {
      yield i++;
    }
  }
  
  // const numbersGenerator = generateNumbers();
  // console.log(numbersGenerator.next().value);
  // console.log(numbersGenerator.next().value);
  console.log(generateNumbers.next().value);
  