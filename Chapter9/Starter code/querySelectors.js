/**
 * ? Query Selectors
 *      Allows us to use CSS selector
 *          document.querySelectors('p');  //Selects first p element
 *          document.querySelectors('#myId');  //Selects first element with id = myId
 *          document.querySelectors('.myClass');  //Selects first element with class = myClass
 *          document.querySelectorAll("p");  //Selects all p elements
 */

console.dir(document.querySelector("h1"));
console.dir(document.querySelector("#description"));
console.dir(document.querySelector(".boxLink"));
console.dir(document.querySelector("div a"));
console.dir(document.querySelectorAll("p"));
