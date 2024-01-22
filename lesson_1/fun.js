// console.log("Jje");


// function a(a, b) { return a + b }

// console.log(a(10, 23));;

const obj = {
    name: "Saimon",
    abc(){
        setTimeout(() => {
            console.log(this.name);
        }, 1000)
    }
}
obj.abc();