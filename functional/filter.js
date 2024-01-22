const arr = [ 20,15,10,12,11,4,54,44,12];


const newArr = arr.filter(function(value){
    if(value % 2 == 1){
        return value
    }
})
console.log(newArr);