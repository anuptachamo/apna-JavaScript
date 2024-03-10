/**
 *  ?Simon Says Game
 *      step 1: started game
 *      step 2: levelUp game
 */

let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    //game started vako xna
    console.log("Game is started");
    started = true; //game started vayo

    levelUp(); //call levelUp function
  }
});

function levelUp() {
  level++;
  h2.innerText = `Level ${level}`; //h2 ko value innerText ma baseko print hune

  //   random btn choose
  let randIdx = Math.floor(Math.random() * 3);
  let randomColor = btns[randIdx];
  let randomBtn = document.querySelector(`.${randomColor}`);

  console.log(randIdx); //kun random index choose gareko tyo show hune vayo
  console.log(randomColor); //kun random color choose vako tyo show hune vayo
  console.log(randomBtn);
  btnFlash(randomBtn);
}

function btnFlash(btn) {
  btn.classList.add("flash"); //add new class name for

  //   remove flash btn in 1 sec vaneko
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}
