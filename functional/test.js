
/**
 * function saidd to be first class citizen in IF:
 * a fun. can be stored in a variable
 * fun can be stored in an array
 * fun can be stored as an object field or property
 * we can create unction as needed
 * can pass a fun as an argument
 * 
 */

/// Variable
function sayName(name) {
    return "Hello " + name;
}

const fun = sayName;

console.log(fun("Robin"));
/// Array

const arr = [1, 2, 8];
arr.push(fun)
console.log(arr);

// object
const object = {
    name: "Shaon",
    sayName: fun,
    print: function (name) {
        return name
    }
}

const nameIs = object.print("Kawseer");
console.log(nameIs);

//Argument 

function details(name, fun) {
    return fun(name);
}
const detail = details("robin mondo", fun);

console.log(detail);

//Parameter

function abc(a, b) {
    return function add(a, b){
        return a + b;

    }
    
}
const value = abc()(4,8);
console.log(value);