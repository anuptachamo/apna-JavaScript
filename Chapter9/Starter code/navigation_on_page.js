/**
 *  ? Navigation
 *      parentElement
 *      children
 *      previousElementSibling / nextElementSibling
 *      Also we can add style to it [example in line no 38]
 */

// index.html  --line no 28
let h4 = document.querySelector("h4");
console.dir(h4.parentElement); //h4 parent element --> box
console.dir(h4.children); // h4 child element --> none

let box = document.querySelector(".box");
console.dir(box.parentElement); //box parent element --> body
console.dir(box.children); // box child element h1, ul
console.dir(box.childElementCount); //box total child element ---> 2

let ul = document.querySelector("ul");
console.dir(ul.parentElement); // ul parent element ---> box
console.dir(ul.children); //ul child element --> li,h1,p
console.dir(ul.childElementCount); //ul total child element ---> 3

//Sibling element
console.dir(ul.children); //ul child element --> li,h1,p,ul, p
console.dir(ul.children[0]); //ul first child element --> li
console.dir(ul.children[1]); //ul second child element --> h1
console.dir(ul.children[2]); //ul third child element --> p
console.dir(ul.children[3]);
console.dir(ul.children[4]);
console.dir(ul.children[5]); //undefined [becoz there is no index 5 in ul element]

console.dir(ul.children[2].previousElementSibling); //previous child element of ul index no. 2 --> h1
console.dir(ul.children[1].previousElementSibling); //previous child element of ul index no. 1 --> li
console.dir(ul.children[0].nextElementSibling); //next element of child element of ul index no. 0 -->h1


// adding style to the sibling element
let img = document.querySelector("img");
console.dir(img.previousElementSibling);
console.dir(img.previousElementSibling.style);
console.dir(img.previousElementSibling.style.color = "blue");
