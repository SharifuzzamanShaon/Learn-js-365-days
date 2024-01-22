const p={
    fName:"Habil",
    lName:"Ahamed",
    fullName: function(){
       console.log(this.fName +" "+this.lName); 
    }
}
const p2={
    fName: "Kawser",
    lName:"ks"
}

// Change this value call() & apply()
// explicit binding
p.fullName.call(p2);

function person(name){
    this.name = name
}
// function constructor
const p1 = new person("Robin");
console.log(p1.name);