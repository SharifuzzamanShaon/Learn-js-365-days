function fun(text, ...rest) {
    const result = rest.reduce((sum, cur) => sum + cur, 0);
    console.log(result);
}

// fun("The sum is:", 1, 5, 2, 0)
// const result = num % 2 === 0 ? "Even" : num % 3 === 0 ? "Divisible by 3" : "Not divisible by 3"


const obj = {
    name: "hyf",
    degree: {
        name: "bba",
        school:{
            name: "skj dwj "
        }
    }
}
console.log(obj?.degree.school?.name);
// const { degree: { name } ={} } = obj
// console.log(name);