function a(x) {
    console.log("Hi");
    if (x <= 1) {
        return 1;
    } else {
        x = x - 1;
        return a(x);
    }
 }
 
 // Initial call to the function with x set to 8
 a(4);
 