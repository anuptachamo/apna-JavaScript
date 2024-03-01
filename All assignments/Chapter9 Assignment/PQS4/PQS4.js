/**
 *  ?Qs4. Create an h1 element on the page and set its text to “DOM Practice” underlined. Change its color to purple.
 */

let h1 = document.createElement("h1");
console.dir(h1);
console.dir((h1.innerText = "DOM Practise"));

let body = document.querySelector("body");
console.dir(body.prepend(h1));

console.dir((h1.style.color = "purple"));
