const str = "This is a programming language";

const revOrder = (str) => {
    const result = str.split(" ")
    result.sort((a, b) => {
        return a.length - b.length;
    })
    return result;
}


console.log(revOrder(str));