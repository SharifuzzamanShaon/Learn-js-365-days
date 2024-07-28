/**
 * Js program to check a given string contains 2 to 4 occurences of a specified chracters
 * 
 */

const countChar=(str, char)=>{
    return str.split('').filter((item)=> item === char).length
}

const contain2To4=(str, char)=>{
   return countChar(str, char) >=2  &&  countChar(str, char) <=4 
}

console.log(contain2To4('hiiii','i'));
console.log(contain2To4('hii','i'));
console.log(contain2To4('hiiiiii','i'));