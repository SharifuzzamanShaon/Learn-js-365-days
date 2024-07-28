/**
 * Concatanate 2 string except the first character
 */

const Concatanate = (str1, str2)=>{
    return str1.slice(1) + str2.slice(1)

}

console.log(Concatanate("hello", "xyz"));