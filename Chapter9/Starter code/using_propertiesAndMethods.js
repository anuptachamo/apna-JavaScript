/**
 *  ? Using Properties and Methods
 *
 *      innerText
 *          shows the visible text contained in a node
 *
 *      textContent
 *          Shows all the full text
 *
 *      innerHTML
 *          Shows the full markup
 */

let para = document.querySelector("p");
console.dir(para);

console.dir(para.innerHTML);
console.dir(para.textContent);
console.dir(para.innerText);

console.dir((para.innerText = "Hi, I am peter Parker!")); //updating innerText
console.dir((para.innerText = "Hi, I am <b>peter Parker!</b>")); //In this case peter Parker wont be bold
console.dir((para.innerHTML = "Hi, I am <b>peter Parker!</b>")); //In this case peter Parker will be bold

let heading = document.querySelector("h1");
console.dir(heading);
console.dir(heading.innerHTML);
console.dir(heading.innerHTML =`<u>${heading.innerHTML}</u>`)
