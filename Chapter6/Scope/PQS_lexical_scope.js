/**
 * ? What will be the output?
 * 
 */

let greet = "hello" //global scope

function changeGreet(){
    let greet = "namaste"; //function scope
    console.log(greet);  //yesma function scope ko value print hunxa

    function innerGreet(){
        console.log(greet);   //this is lexical scope(nested function), yo code run naii hundaina kna ki innerGreet laii call naii gareko xna
    }
}

console.log(greet);  //yesma global scope ko value print hunxa
changeGreet();

