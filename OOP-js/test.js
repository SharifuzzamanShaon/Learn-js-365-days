/**	In oop we combined a group of related variables and function into a unite, 
refers variables as properties and functions as methods */

let baseSalery = 30000;
let overTime = 10;
let rate = 20;

function getWage(baseSalery, overTime, rate) {
    return baseSalery + (overTime * rate);
}
console.log(getWage);


let employee = {
    baseSalery: 30000,
    overTime: 10,
    rate: 20,
    getWage: function () {
        return baseSalery + (overTime * rate);
    }
}

console.log(employee.getWage);