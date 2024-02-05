/**
 *  ? 'this' with Arrow functions
 *      *In arrow functions, this does not have its own binding. Instead, it retains the value of this from the enclosing lexical scope. This behavior is different from regular functions, which have their own this context.
 * 
 *      Arrow Function                                 Normal Function
 *      1. lexical scope (nested function)              1. scope --> this  --> calling object
 *              parent => call scope
 */

const student = {
    name : "anup",
    class : "bachelor",
    age : 23,
    prop : this,  // In this case this is global scope 
}