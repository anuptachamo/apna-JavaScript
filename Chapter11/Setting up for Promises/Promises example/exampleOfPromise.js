h2 = document.querySelector("h2");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h2.style.color = color;
      resolve("color changed!");
    }, delay);
  });
}
changeColor("red", 1000)
  .then(() => {
    console.log("red color was completed");
    return changeColor("orange", 1000);
  })
  .then(() => {
    console.log("Orange color was completed");
    return changeColor("gray", 1000);
  })
  .then(() => {
    console.log("gray color was completed");
    return changeColor("purple", 1000);
  })
  .then(()=>{
    console.log("purple color was completed");
  })
