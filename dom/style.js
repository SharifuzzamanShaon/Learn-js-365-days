const h3 = document.querySelector("h3");
const num1 = document.getElementById("#num1")
const num2 = document.getElementById("#num2")
const result = document.getElementById("#result")

const btn = document.querySelector("button")



btn.addEventListener("click", function () {
    const result = (num1 * 1) + (num2 * 1)
    console.log(result);
    console.log(num1);
    return result.innerHTML = `${result}`
})


// console.log(a());
// console.dir(a())
// function a() {
//     return 1 + 4;
// }
// console.log(b());
// console.dir(b())
// const b = function () {
//     return 2 + 2
// }

const counterFuction =(n)=>{
    let count = n
    return function(){
        console.log(count);
        count++;
    }
}

const counter=counterFuction(0);

counter()
counter()
counter()
counter()
