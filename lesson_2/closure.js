
// function outer(){
//     let counter = 0;
//     function inner(){
//         counter++;
//         console.log(counter);
//     }
//     inner();
// }

// outer();

/**
 * 1
 * 1
 */



function outer(){
    let counter = 0;
    function inner(){
        counter++;
        console.log(counter);
    }
   return inner;
}

const fn = outer();

fn()
fn()

/**
 * 1
 * 2
 */