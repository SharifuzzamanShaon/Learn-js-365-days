 class API{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    addSurname(){
        let name = this.name
        name = name+" "+"kenedy"
        this.fullName = name
        return this
        
    }

}

const res = new API("sahon",0).addSurname()


console.log(res);