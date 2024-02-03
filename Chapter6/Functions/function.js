/**
 *  ? Functions in JS
 *      In JavaScript, a function is a block of reusable code that performs a specific task or set of tasks.
 *      Functions allow you to organize your code into modular and manageable pieces, making it easier to understand, debug, and maintain.

            Here is a basic syntax of a function in JavaScript:
                Function Definition (telling JS)

                    function funcName(){                        function hello(){
                        do something                                console.log("hello");
                    }                                               }

                Function Calling (using the function)
                    
                    funcName();                                     hello();

 */

// defining function
function hello(){
    console.log("hello world");
    console.log("I'm a hacker")
}

function print1to5(){
    for (let i =0; i<=5; i++){
        console.log(i)
    }
}

function isAdult(){
    let age = 18;
    if (age >=18){
        console.log("Adult")
    }else{
        console.log("Not adult")
    }
}

// calling function
hello();
print1to5();
isAdult();
