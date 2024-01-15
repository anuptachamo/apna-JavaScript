/**
 *  ? Alert and Prompt
 *      *Alert display an alert message on the page.
 *      *alert ("something is wrong!");
 * 
 *      *Prompt displays a dialog box that asks user for some input
 *      *prompt("please enter your roll no.");
 */



// Alert example
// alert("something is wrong!");
/*console.log("this is an simple log");
console.error("this is an error msg");
console.warn("this is a warning msg");*/


// Prompt example
let fname = prompt("enter first name : ");
let lname = prompt("enter last name : ");
// console.log("Welcome", fname + " " + lname);
let fullname =`Your full name is ${fname.toUpperCase()} ${lname}`;
alert(fullname);