// 1. Create a variable of type string and try to add a number to it.

let a = "anup"
let b  = 34

console.log('1. ' + (a + b))

// 2. Use typeof operator to find the datatypes of the string in last question.
//  console.log(typeof a, typeof b)
console.log('2. ' + typeof (a+b))

// 3. Create a Const object in javascript. can you change it to hold a number later?
const c  ={
    name: "Anup",
    section: 1,
    isPrincipal: false
}
// c = 45  // no we can't change it to the number


// 4. Try to add a new Key to the Const object in problem 3 were you able tom do it?
c ["fname"] = "Matina"
console.log(c)


// 5. Write a js program to create a word-meaning dictionary of 5 words.
const dict = {
    code : "a system for communication by telegraph, heliograph, etc.",
    coder :"a person or device that translates information into a code.",
    hacker:"a person or thing that hacks.",
    computer: "a programmable electronic device designed to accept data, perform prescribed mathematical and logical operations at high speed, and display the results of these operations.",
    JavaScript:"a brand name for a high-level, object-oriented scripting language used especially to create interactive applications running over the internet."

}

console.log('The meaning of javaScript is: ' + dict.JavaScript)



let qq = 1;
let ss = 34;
let totalSum = (qq + ss);
console.log(`sum: ${totalSum}`)


// 6. What is the value of age after this code runs?
    let age = 23;
    age = age + 2;  //25
    console.log('my age = ',age);

//  What is the value of avg after this code runs?
    let hindi = 80;
    let eng   = 90;
    let math  = 100;
    let avg   = (hindi + eng + math) / 3;
    console.log('avg = ',avg);

