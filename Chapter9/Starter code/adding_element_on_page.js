/**
 *  ?Adding Elements
 *      document.createElement("p")
 *
 *      - appendChild (element)  => last ma add hunxa
 *      - append (element)  => use for adding more content from  last only
 *      - prepend (element) =>  use for adding more content from first only
 *      - insertAdjacent (where, element)  => adding more content where we want to
 */

// Adding new element
let newPara = document.createElement("p");
console.dir(newPara);
console.dir((newPara.innerText = "Hi, I am a new para.")); //ahile sama console ma matra show hunxa, hamro real page ma show vako xaina

let body = document.querySelector("body");
console.dir(body.appendChild(newPara)); //appendChild help to add newPara in last of the body tag

//if you want to add paragraph in box class then,
let box = document.querySelector(".box"); //box class --> index.html=> line no 28
console.dir(box.appendChild(newPara)); //appendChild help to add newPara in last of the box class
console.dir(newPara.append(" I am append.")); //use for adding more content in newPara in last of it
console.dir(newPara.prepend(" hello I am prepend. ")); //use for adding more content in newPara in first of it

// example for insertAdjacent (where, element)
let btn1 = document.createElement("btn1");
console.dir((btn1.innerHTML = " NEW BUTTON"));

let p = document.querySelector("p");
console.dir(p);
console.dir(p.insertAdjacentElement("beforebegin", btn1)); //suru hunu agadii print gara vaneko
console.dir(p.insertAdjacentElement("afterbegin", btn1));  //suru vaye paxii print gara vaneko 
console.dir(p.insertAdjacentElement("beforeend", btn1));   //saknu agadi print gara vaneko 
console.dir(p.insertAdjacentElement("afterend", btn1));   //sakey paxi print gara vaneko 




// Another example
// Adding new element in box class --> index.html=> line no 28
let btn = document.createElement("btn");
console.dir("btn");
console.dir(btn);

console.dir((btn.innerText = "Click me!"));
console.dir(box.appendChild(btn));

// adding styling on btn
console.dir(btn.classList.add("newBtn")); //style.css => line no.21
