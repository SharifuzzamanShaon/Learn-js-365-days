/**
 * Which number is nearest to 100
 */


const nearestNumber=(num1, num2)=>{
    return (num1 - 100) > (num2 - 100) ? num1 : num2
}
console.log(nearestNumber(45, 80));
console.log(nearestNumber(0, 77));
console.log(nearestNumber(78, 78));