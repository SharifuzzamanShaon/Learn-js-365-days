/**
 * Write a javascript program to create a new string from  a given string taking the first 3 characters and 
 * the last 3 characters of a string and adding them together. the string length must be 3 or more, if not,
 * the original string is returned 
 */

const createTheStr=(str)=>{
   return str.length<3 ? str : str.slice(0, 3) + str.slice(-3);
}

console.log(createTheStr('abc45542xyz'));

