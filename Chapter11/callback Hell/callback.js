
//----Callback Hell Example-----
h1 = document.querySelector("h1");

function changeColor(color, delay, nextColorChange) {
  setTimeout(() => {
    h1.style.color = color;
    if (nextColorChange) nextColorChange();
  }, delay);
}
changeColor("red", 1000, () => {
  changeColor("orange", 1000, () => {
    changeColor("green", 1000);
  });
});

//---Normal way to change a text color with in a second----
// setTimeout(() => {
//   h1.style.color = "red";
// }, 1000);

// setTimeout(() => {
//   h1.style.color = "orange";
// }, 2000);

// setTimeout(() => {
//   h1.style.color = "gray";
// }, 3000);
