/**
 *  ?Qs5. Create a p tag on the page and set its text to “Apna College Delta Practice”, where Delta is bold.
 */

let p = document.createElement("p");
console.dir((p.innerHTML = "Apna College <b>Delta</b> Practice."));

let body = document.querySelector("body");
console.dir(body.prepend(p));
