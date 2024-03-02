// let btn = document.querySelector("button");
// console.dir(btn);

// function sayHello() {
//   alert("Hello!");
// }
// btn.onclick = sayHello;

let btns = document.querySelectorAll("button");
for (btn of btns) {
  btn.onclick = sayHello;
  btn.onmouseenter = function () {
    console.log("you entered a button");
  };
  console.dir(btn);
}

function sayHello() {
  alert("Hello!");
}
