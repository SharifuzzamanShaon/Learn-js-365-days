let createCounter = function (init) {
    return {

        increment: function () {
            return init+1;
        },
        reset: function(){
            return init
        },
        decrement: function(){
            return init-1
        }
    }
};

  const counter = createCounter(5)
 const inc= counter.increment(); // 6
 const reset =  counter.reset(); // 5
 const dec = counter.decrement(); // 4
  console.log(inc)
  console.log(reset)
  console.log(dec)