// ?QS. How to change text color with in a second more than  two times.

h2 = document.querySelector("h2");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h2.style.color = color;
      resolve("color changed!");
    }, delay);
  });
}

async function demo() {
  await changeColor("red", 1000);
  await changeColor("blue", 1000);
  await changeColor("green", 1000);
  await changeColor("yellow", 1000);
}
