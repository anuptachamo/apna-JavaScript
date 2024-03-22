/**
 * ? JSON (JSON data dherai jasto String format ma hunxa)
 *      Accessing Data from JSON
 *
 *      - JSON.parse(data) Method
 *        To parse a string data into a JS object
 *
 *      - JSON.stringify(json ) Method
 *        To parse a JS object data into JSON
 */

let jsonRes =
  '{"fact":"Mountain lions are strong jumpers, thanks to muscular hind legs that are longer than their front legs.","length":102}';
console.log(jsonRes);
console.log(jsonRes.fact);

// converting json data ----> js object
let validRes = JSON.parse(jsonRes);
console.log(validRes);
console.log(validRes.fact);

// converting js object ----> JSON
let student = {
  name: "anup",
  marks: 95,
};

let result = JSON.stringify(student);
console.log(result);
