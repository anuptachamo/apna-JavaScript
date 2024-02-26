/**
 *  ? Manipulating Style
 *      style Property
 *          obj.style
 *
 */

let img = document.querySelector("img");
console.dir(img);
console.dir(img.style);

let heading = document.querySelector("h1");
console.dir(heading.style);
console.dir((heading.style.color = "green")); //update heading color to green
console.dir((heading.style.backgroundColor = "red")); //update heading backgroundColor to red

let links = document.querySelectorAll(".box a");

for (let i = 0; i < links.length; i++) {
  links[i].style.color = "purple";  //inline style
}

//OR(Atlternative)
for (link of links) {
  link.style.color = "red";  //inline style
}
