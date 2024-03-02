let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  //setting randomColor in h3
  let h3 = document.querySelector("h3");
  let randomColor = getRandomColor();
  h3.innerText = randomColor;

  //setting randomColor in div background
  let div = document.querySelector("div");
  div.style.backgroundColor = randomColor;

  console.log("color updated");
});

function getRandomColor() {
  let red = Math.floor(Math.random() * 255); //floor is use for roundOf, floor always give a value less than or equal to
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb(${red}, ${green}, ${blue}) `;
  return color;
}
