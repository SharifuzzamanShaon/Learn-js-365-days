/*
let, const has 
block scope 
& 
var has function scope
*/

//In js a variable can use before the declaration; this because variables get hoisted 
// 1st while declaring a varibale using var its goes on top and assigned as undefined 
// But int he case of the let and const it do not declared as undefined; 
//  let gives ReferenceError err and const give SyntaxError
console.log("testing ");

a = 1;
let a;
console.log(a);
//ReferenceError: Cannot access 'a' before initialization
