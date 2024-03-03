/**
 *  ?KeyboardEvent
 *      KeyboardEvent objects describe a user interaction with the keyboard;
 *      each event describes a single interaction between the user and a key (or combination of
 *      a key with modifier keys) on the keyboard. The event type (keydown, keypress, or keyup)
 *      identifies what kind of keyboard activity occurred.
 */


btn = document.querySelector("button");

// btn.addEventListener("click", function (event){  //event is default agrument
//     console.log(event);
//     console.log("button clicked");
// });

btn.addEventListener("dblclick", function (event) {
  //event is default agrument
  console.log(event);
  console.log("button clicked");
});

// keydown
let input = document.querySelector("input");
input.addEventListener("keydown", function (event) {
  console.log(event.key);
  console.log(event.code);
  console.log("key was pressed");
});

// keyup
input.addEventListener("keyup", function () {
  console.log("key were pressed");
});

// next example
let input2 = document.querySelector(".input2");
input2.addEventListener("keydown", function (event) {
  console.log(event.code); //ArrowUp, arrowDown, ArrowLeft, ArrowRight
  if (event.code == "ArrowUp") {
    console.log("characterr moves forward");
  } else if (event.code == "ArrowDown") {
    console.log("character moves backward");
  } else if (event.code == "ArrowLeft") {
    console.log("character moves left");
  } else if (event.code == "ArrowRight") {
    console.log("character moves right");
  }
});
