/**
 *  ? Removing Elements
 *      - removeChild (element)  => just opposite of appendChild
 *      - remove (element)  => just opposite of append
 */

// Adding new element
let newPara = document.createElement("p");
console.dir(newPara);
console.dir((newPara.innerText = "Hi, I am a new para.")); //ahile sama console ma matra show hunxa, hamro real page ma show vako xaina

let body = document.querySelector("body");
console.dir(body.appendChild(newPara)); //appendChild help to add newPara in last of the body tag

// Removing Elements using removeChild
console.dir(body.removeChild(newPara));

// again adding element for next example
console.dir(body.insertAdjacentElement("beforebegin", newPara)); //suru hunu agadii print gara vaneko

// removing elements using remove
console.dir(newPara.remove());

/**
 * NOTE : Also we can remove anything from our page for example:
 *
 */
let p = document.querySelector("p");
console.dir(p.remove());
