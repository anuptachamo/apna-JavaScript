/**
 *  ? Events Listener
 *      addeventListener
 *      element.addEventListener(event, callback)
 *
 *      btn.addEventListener("click", function () {
 *          console.log("button clicked");
 *      });
 */

let btns = document.querySelectorAll("button");
for (btn of btns) {
  //   btn.onclick = sayHello;
  //   btn.onclick = sayName;

  btn.addEventListener("click", sayHello);
  btn.addEventListener("click", sayName);

//   btn.addEventListener("dblclick", function (){
//     console.log("you double clicked me");
//   })
}
console.log();
function sayHello() {
  alert("Hello!");
}

function sayName() {
  alert("anup");
}
