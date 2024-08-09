const abc  = (n) => {
    let count = n
    return function () {
        console.log(count);
        return count++
    }
}
const x = abc(1)
x()
x()
x()
x()