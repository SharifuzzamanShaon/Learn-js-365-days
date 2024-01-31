 function hello(callback){
    callback()
}

function test(){
    console.log("hi")
}

const first=hello(test)