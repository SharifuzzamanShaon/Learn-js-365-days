/**
 * They are used to handle asynchronous operations, providing a more powerful and flexible way of managing asynchrony compared to callbacks.
 */

// let promise = new Promise(function(resolve, reject) {
//     // some asynchronous operation here\
//     let a=false
//     if (a) {
//         resolve(console.log("as")); // if everything worked, call resolve with the result
//     } else {
//         reject(console.log("rejected")); // else reject with the error reason
//     }
// });

// promise.then(
//     result => console.log(result), // handles the result if the promise is fulfilled
//     // error => console.error(error) // handles an error if the promise is rejected
// ).catch((error)=>{
//     console.log(error);
// })


let conditions=true;


const proms= new Promise((resolve, reject) => {
    setTimeout(() => {
        if (conditions) {
            resolve ("Hello")
        } else {
            reject ("This condition faild")
        }
    }, 2000);
    console.log("After promise");
});


proms.then((result) => {
    console.log("result is: " +result);
})
.catch(function(error){
    console.log(error);
});