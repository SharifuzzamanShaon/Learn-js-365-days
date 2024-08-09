const counterFun = (n) => {
    let count = n;
    function inc() {
        console.log(count);
        return count++;
    }
    function dec(){
        console.log(count);
        return count--
    }
    function reset(){
        let reset = n
        console.log(reset);
        return reset
    }
    return{
        inc: inc,
        dec: dec,
        reset: reset
    }
}
/**
 * need to return an object containing the inc, dec, and reset methods to allow these methods to be accessed and called from 
 * outside the counterFun function. Without returning these methods, they remain private and inaccessible.
 * 
 * 
 */
const cal = counterFun(0);

console.log(cal.inc());
console.log(cal.inc());
console.log(cal.inc());
console.log(cal.inc());
console.log(cal.inc());