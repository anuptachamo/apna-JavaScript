/**
 *  ? this in Event Listeners
 *      When 'this' is used in a callback of event handler of something, it refers to that something.
 */

let btn = document.querySelector("button");
let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

function changeColor() {
  console.dir(this);
  console.dir(this.innerText);
  this.style.backgroundColor = "blue";
}

btn.addEventListener("click", changeColor);
p.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor);
