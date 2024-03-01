/**
 *  Qs2. Add following attributes to the element :
        - Change placeholder value of input to “username”
        - Change the id of button to “btn”
 */
let input = document.querySelector("input");
console.dir(input.setAttribute("placeholder", "username")); //updating placeholder name

let btn = document.querySelector("button");
console.dir(btn.setAttribute("id", "btn")); //updating button id name
