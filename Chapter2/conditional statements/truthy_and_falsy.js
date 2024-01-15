/***
 *  ?   truthy & falsy
 *      Everything in JS is true or false (in boolean context).
 *      This doesn't mean their value itself is false or true, but they are treated as false or true if taken in boolean context.
 *      
 *      * Falsy values
 *          false, 0, -0, on (BigInt value), ""(empty string), null, undefined, NaN
 *      
 *      * Truthy values
 *          Everything else
 *      
 */

if (1){
    console.log("It has true value");
}else{
    console.log("It has false value")
}