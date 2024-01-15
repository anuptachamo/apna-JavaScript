/**
 *  ?Conditional Statements
 *      -> if-else
 *      -> nested if-else
 *      -> switch
 *      
 *      *if Statement
 *          some code before if
 *          
 *          if(some condition){
 *              DO SOMETHING
 *          }
 *  
 *          some code after if
 */

//if statements example
console.log("before my if statement")
let age = 23;
if (age>=18){
    console.log("you can vote")
    console.log("you can drive")

    let a = 5;
    console.log(5 * a);
}
if (age < 18){
    console.log("you cannot vote")
}
console.log("after my if statement")

//  another if statement example
let fname = "anup";
if (fname == "anup"){
    console.log(`Welcome ${fname}`);
}


