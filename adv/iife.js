/**
 * 
 * Avoid polluting the global namespace
 const data =(async()=>{await fetch()})()
 */


(function (name) {
    console.log(name);
})("robin");
const result = (function (num) {
    return num;
})("01234");
console.log(result);

/**
 * 
 */
const arg = (function () {
    var private = 10;
    return {
        getter: function (private) {
            console.log(private);
        },
        setter: function (val) {
            private = val;
        }
    }
})()

