class Person{
    constructor(name, age){
        this.name = name;
        this.age  =age;
    }
    about(){
        console.log(this.name +" is playing");
    }
}

const res = new Person("Kalil", 45)
console.log(res.about());