/**
 * write a javascript program to find number of even digits in an array of integers
 */

const getEvenDigits=(arr)=>{
    return arr.filter(item=>item % 2 ===0).length
}

console.log(getEvenDigits([45,7,8,6,10]));
console.log(getEvenDigits([2,7,7,6,78]));
console.log(getEvenDigits([45,7,8,6,7,6,50]));