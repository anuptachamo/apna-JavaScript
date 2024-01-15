/**
 *  ?Qs2. take the user's name and age as input using prompts. Then return back the following statement to the user as an alert (by substituting their name and age)
 *  [Use template Literals to print thus sentence]
 */

let fullname = prompt("Enter your fullname: ");
let age = prompt ("Enter your age :");
let msg = `${fullname} is ${age} years old.`
alert(msg);
