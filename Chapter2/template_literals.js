
/* 
?`Template Literals`
    *They are used to add embedded expressions in a string.
        let a = 5;
        let b = 10;
        console.log('Your pay ${a + b} rupees')
    *Backticks (`) are used in order to perform template interpolation.
    * useful things that can be achieved are:
        -   Multiline Strings
        -   Direct variable usage.
        -   easily hookup an expression.
        and make far more easy to read and understand the code.

*/

let firstname = "Anup";
let lastname = "Tachamo";

//* concatenation
// let fullname = (firstname +" " +  lastname);

//* Template literals  -- `${Expressions}`
let fullname = `My name is ${firstname.toUpperCase()}  ${lastname.toLowerCase()}`;
console.log(fullname)


//* Nested template literals
let a = "sanil";
let b = "kritish";
let ab = `Value of a and b are ${`${a} and ${b}`}`
console.log(ab)


/* 
* `tagged Template Literals`
        - A more advanced from of template literals are tagged templates.
        - Tags allow us to parse template literals with a function. The first argument of a tag function contains an array of string values. The remaining argument are related to the expressions.
        - The tag function can then perform what ever operations on these arguments you wish, and return the manipulated string.
        - Libraries using tagged Templates are: GraphQl, Styled-components, etc 
*/


let tag1 = "Anjana";
let tag2 = "Tachamo";

let data = js`tag1 is ${tag1} and tag2 is ${tag2}`

function js(string, exp, exp2){
        console.log(string)
        console.log(exp)
        console.log(exp2)

        return exp + exp2
}
console.log("data: ", data)