/**
 * A function that can invoked with "new" keyword.
 *  returns and object if we use this keyword
 * 
 * 
 * Note :: constructor functions cannot be made by arrow functions. Arrow functions are a concise way of writing function expressions, but they do not have some of the features that constructor functions do, such as the ability to set the this keyword and the ability to return an object without the new keyword
 */

function makeCop(color, name) {
    this.color = color
    this.name = name
    this.height = 5
}

const cop1 = new makeCop("red", "robin");

console.log(cop1);