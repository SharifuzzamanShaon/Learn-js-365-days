// function return 

/*
schope     
closure 

*/
function greetings(msg) {
    return function (name) {
        return function(name2){
            console.log(msg+ " " + name + " " + name2);
        }
    }
}
const hello= greetings("Hello");
// const hello2= greetings("Brother");

const hello2 = hello("Tamim");
hello2("jh");