/**
 *  ? Map => map ma ek ek garera function definition ma element apply garxa anii value return gareko laii naya variable ma store garxa
 
 * 
 */

// for example
let num = [1, 2, 3, 4];
let double = num.map(function (el) {
  //double =>new variable
  return el * 2;
});
console.log(double);

// Another example
let somth = [
  {
    name: "anup",
    marks: 90,
  },
  {
    name: "kritish",
    marks: 95,
  },
  {
    name: "sanil",
    marks: 80,
  },
];

let gpa = somth.map((el) => {
  return el.marks / 10;
});
console.log(gpa);
