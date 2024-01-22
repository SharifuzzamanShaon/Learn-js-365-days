function f() {
    const a = 10;
    return function b() {
        return a + a;
    }

}

console.dir(f());

function add() {
    const count = 1;
    return count += 1
}

console.log(add())
console.log(add())
console.log(add())
console.log(add())