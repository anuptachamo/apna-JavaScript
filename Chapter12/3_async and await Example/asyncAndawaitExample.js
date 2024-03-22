// ?QS. How to change text color with in a second more than  two times.

h2 = document.querySelector("h2");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 5) + 1;
      if (num > 3) {
        reject("promise rejected");
      }
      h2.style.color = color;
      console.log(`color chnaged to ${color}!`);
      resolve("color changed!");
    }, delay);
  });
}

async function demo() {
  try {
    await changeColor("red", 1000);
    await changeColor("blue", 1000);
    await changeColor("green", 1000);
    await changeColor("yellow", 1000);
  } catch (err) {
    console.log("some error occurs");
    console.log(err);
  }

  let a = 5;
  console.log(a);
  console.log("new number =", a + 3);
}
