/**
 * write the program which retuen the even value of the given number 
 */

const theEvenValueOfNum = (num) => {
    const retuenArr = [];
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            retuenArr.push(i);
        }
    }
    return retuenArr.length;
}
console.log(theEvenValueOfNum(7));