/**
 *  ? Higher Order Functions
 *      * A function that does one or both:
 *          - takes one or multiple functions as arguments
 *          - return a function
 */

function multipleGreet (func, n){
    for (let i =1; i<=n; i++){
        func();
    }
}

let greet = function(){
    console.log("hello");
}


multipleGreet(greet, 10);


// alternative
multipleGreet(function(){console.log("Alternative")}, 3)