/**
 *  ? Manipulating style
 *      using classList
 *      obj.classList
 *
 *      classList.add() to add new classes
 *      classList.remove() to add remove classes
 *      classList.contains() to check if class exists
 *      classList.toggle() to toggle between add and remove
 */

let heading = document.querySelector("h1");
console.dir(heading.classList);

console.dir(heading.classList.add("green"));  //add new class (this green class is design in style.css file)
console.dir(heading.classList.remove("green")); //remove class
console.dir(heading.classList.contains("green")); // to check if class exists or not (true or false ma show hunxa)
console.dir(heading.classList.toggle("green")); //green class exists garxa vane remove garxa, exists xna vaney add garxa




/** NOTE : while adding the new classes, the classes must be below of that classes
 *    for example: 
 *       Here h1 is a already set class and green is a new class which we had add just now,
 *       to work green class the green class must be below of h1 , if in case green class is above h1 green class won't work.
 */

