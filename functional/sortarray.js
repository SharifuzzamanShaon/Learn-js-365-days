// const arr = [20,15,10,12,11,54,44,12];
// const arr2= [...arr];
// const value = arr.toReversed();

// console.log(value);
// console.log(arr);


// const arr = [ 20,15,10,12,11,4,54,44,12];

// arr.sort(function(a,b){
//     return b-a;
// })

// console.log(arr);

/// SORT AN ARRAY OF OBJECT

const arr = [
    { name: "Ab Kondokar", age: 56 },
    { name: "Nayem", age: 31 },
    { name: "Kamrul Hasan", age: 20 },
    { name: "Bkash Datta", age: 45 }
]

arr.sort(function(a,b){
    if(a.name > b.name){
        return 1;
    }else if(a.name < b.name){
        return -1;
    }else{
        return 0;
    }
})
console.log(arr);