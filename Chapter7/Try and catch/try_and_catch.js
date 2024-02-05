/**
 *  ? try and catch
 *      The try statement allows to define a block of code to be tested for errors while it is being executed.
 *      
 *      The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.
 */

//simple hamle bujnu parda try and catch laii error handle garna ko lagii use garincha
try {
    console.log(a);
} catch {
    console.log("variable a doesn't exist")
}



/*In this case, b is not defined so we got errors in line 24,
    and in line no. 21, 22, 23 we get fine code but in line no. 25 and 26 it didn't print due to we get error in line no. 21 again if we use try and catch after  line no. 24 we get all fine code
    */

console.log("hello")
console.log("hello")
console.log("hello")
console.log(b)
console.log("hello2")
console.log("hello3")