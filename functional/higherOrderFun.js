/**
 * f1 returns another function (an add function), not a result of addition operation. 
 * This is a common approach in JavaScript known as higher-order functions, where functions can return other functions.
 */
const f1=(a,b)=>{
    return function add(a,b){
        return a+b;
    }
    
}


const add =f1();
console.log(add(4,6));
