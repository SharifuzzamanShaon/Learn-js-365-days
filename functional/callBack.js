/**
 * callback is a function passed as an argument to another function
 * 
 * 
 */

// function hi(name, callback){
//     console.log("Hello" + " " + name);
//     callback();
// }
// function callMe(){
//     console.log("I am callback function");
// }
// hi("Robin", callMe);


// function hello(name){
//     print(name);
// }
// function print(args){
//     console.log(args);
// }
// hello("Robin");


// Call-back


function f1(a, b, callBack) {
    let sum = a + b;
    callBack(sum);
}

let result = f1(5, 7, function (sum) {
    console.log("your result is:" + sum);
})