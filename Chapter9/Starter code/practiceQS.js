/**
 *  ? Practice QS
 *      Add the following elements to the container using only javaScript and the DOM methods.
 *      i) a <p> with red text that says "hey I'm red!"
 *      ii) an <h3> with blue text that says "I'm a blue h3!"
 *      iii) a <div> with a black border and pink background color with the following elements inside of it
 *              - another <h1> that says "I'm in a div"
 *              - a <p> that says "ME TOO!"
 */

// ? i) a <p> with red text that says "hey I'm red!"
let newPara = document.createElement("p"); //creating new paragraph tag
console.dir(newPara);
console.dir((newPara.innerText = "Hey I'm red!")); //adding text to new paragraph tag

let body = document.querySelector("body");
console.dir(body.append(newPara)); //showing in the page under a body tag

console.dir(newPara.classList.add("redP")); //given style name redP to style it as color red

// ? ii) an <h3> with blue text that says "I'm a blue h3!"
let h3 = document.createElement("h3"); //creating new h3 tag
console.dir(h3);
console.dir((h3.innerText = "I'm a blue h3!")); //adding new text in new h3 tag

let h2 = document.querySelector("h2");
console.dir(h2.append(h3)); //new h3 tag store under a h2 tag

console.dir(h3.classList.add("blue")); //use for giving a styling to the text

/**
 * iii) a <div> with a black border and pink background color with the following elements inside of it
 *          - another <h1> that says "I'm in a div"
 *          - a <p> that says "ME TOO!"
 */

let div = document.createElement("div");  //created a new div
console.dir(div);
console.dir(div.classList.add("div"));   //given new class name to new div for styling
console.dir(body.append(div));  //print div under body tag

let h1 = document.createElement("h1"); //again created new h1
console.dir((div.innerText = "I'm in a div")); //added new text to new h1 tag
console.dir(div.append(h1)); //print new h1 tag under a new div

let p = document.createElement("p"); //again created new p tag
console.dir((p.innerText = "ME TOO!")); //added new text to new p tag
console.dir(div.append(p)); // and also added new p tag uunder new div
