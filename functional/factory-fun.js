/**
 * 
 * The f1 function here is an example of a factory function in JavaScript.

A factory function is a function that returns an object when it is called, and not by calling a constructor. In this case, it's creating an object with two methods: add and sub.
 */
const f1 = () => {
    return {
        add: function (a, b) {
            return a + b
        },
        sub: function (a, b) {
            return a - b
        }
    }
}

console.log(f1().add(1,3));
