/**
 *  ? Block Scope 
 *      * variable declared inside a {} block cannot be accessed from outside the block.
 */

{
    let a = 25;
}

console.log(a); //got error a is not defined because trying to access a outside the block scope

// another example
let age = 25;
if(age>=18){
    let str = "adult";
}
console.log(str); // we got same error as in line number 10