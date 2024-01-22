const h3 = document.querySelector("h3");
const num1 =document.getElementById("#num1")
const num2 =document.getElementById("#num2")
const result =document.getElementById("#result")

const btn = document.querySelector("button")



btn.addEventListener("click", function () {
    const result = (num1*1) + (num2*1)
    console.log(result);
    console.log(num1);
    return result.innerHTML = `${result}`
})