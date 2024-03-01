/**
 *  Qs1. Create a new input and button element on the page using JavaScript only. Set the
    text of button to “Click me”;
 */

let btn = document.createElement("button");
let input = document.createElement("input");
console.dir(btn);
console.dir((btn.innerText = "Click me"));

let p = document.querySelector("p");
console.dir(p.appendChild(btn));
console.dir(p.appendChild(input));
