function abc(){
    let n=50;
    function xyz(){
        const m= 10;
        console.log("inner fun.",m);
       
    }
    xyz();
    return n;
}
console.log(abc())