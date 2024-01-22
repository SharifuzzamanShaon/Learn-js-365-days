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


// const add = f1();
// const sub = f1();
// console.log(sub(5,2));
// console.log(add(4, 6));
console.log(f1().add(1,3));