/**
 *  ? A String is a golden string if it starts with the character 'A' or 'a' and has a total length greater than 5.
 *      For a given string print if it is golden or not.
 */

let myName = "Anupam";
// let myName = "sanil";
if ((myName.length >= 5) && ((myName[0] ==='a') || (myName[0] === 'A'))){
    console.log("This is an golden string");
}else{
    console.log("This is not a golden String");
}