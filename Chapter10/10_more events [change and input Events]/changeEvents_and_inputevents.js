/**
 *  ?change event
 *      The change event occurs when the value of an element has been changed (only works on <input>, <textarea> and <select> elements).
 *
 * ?input event
 *      The input event fires when the value of an <input>, <select>, or <textarea> element has been changed.
 */

let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
});

//change event
let user = document.querySelector("#user");
user.addEventListener("change", function () {
  console.log("change event");
  console.log("final value = ", this.value);
});

// input event
user.addEventListener("input", function () {
  console.log("input event");
  console.log("final value = ", this.value);
});

// next Example
let input = document.querySelector("#text");
let p = document.querySelector("p");

input.addEventListener("input", function () {
  console.log(input.value);
  p.innerText = input.value;
});
