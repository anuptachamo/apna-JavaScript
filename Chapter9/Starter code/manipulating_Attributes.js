/**
 *  ? Manipulating Attributes
 *      obj.getAttribute(attr)
 *      obj.setAttribute(attr, val)
 */

let img = document.querySelector("img");
console.dir(img);
console.dir(img.getAttribute("id"));
console.dir(img.setAttribute("id", "spidermanImg")); //updating the Id name
console.dir(img);

console.dir(img.setAttribute("src", "assets/creation_3.jpeg")); //updating the source attribute(changing image)

console.dir(img.getAttribute("class"));
console.dir(img.getAttribute("class", "images")); //updating the class name
console.dir(img.getAttribute("class"));
console.dir(img);
