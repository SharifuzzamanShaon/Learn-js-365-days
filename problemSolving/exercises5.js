/**
 * 
 * Find the number of even digits of the given array
*/


const evenDigits=(arr)=>{
    return arr.filter((item)=> item % 2 === 0).length
}
console.log(evenDigits([4,7,8,9,6,6,7,4,1,7]));
console.log(evenDigits([12,4,5,7,88,6,30,11]));
console.log(evenDigits([7,8,6,8,9,52]));