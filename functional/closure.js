 function outer(x){
    function inner(y){
        return x+y;
    }
    return inner
 }

 let value = outer(20);

 console.log(value(10));

 /* ***
1. You have an outer function that takes one parameter x.

2. Inside the outer function, there's an inner function that takes one parameter y. This inner function returns the sum of x and y.

3. The outer function itself doesn't return a number, but instead, it returns the inner function.

4. When you call outer(20), you're essentially setting x to 20. But instead of returning a result right away, it gives you back the inner function, but this returned inner function still has a memory (or reference) of the x value you passed earlier (which is 20). This is a feature in JavaScript called a "closure".

5. So, when you do let value = outer(20);, the value variable doesn't store a number but rather it stores the inner function, with a remembered value of x as 20.

6.When you call value(10), you're actually calling the inner function (remember, value is a reference to inner now) with y set to 10. Since inner remembers x was 20, it calculates 20 + 10 and returns 30.

7. Finally, console.log(value(10)); prints the result, which is 30.
 

 */
 