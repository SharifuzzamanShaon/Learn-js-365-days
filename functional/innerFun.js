function outer() {
    function inner() {
        console.log("Inner function");
    }
    inner();
    console.log("Outer function");
}

outer();

/// Inner Arrow function


function abc(num, cb) {
    let result = 0;
    for (let i = 0; i < num; i++) {
        let temp = cb(i);
        result = result + temp;
    }
    return result;
}
const value = abc(10, (x) => { return x + x })
console.log(value);