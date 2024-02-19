/**
 *  ? Destructuring
 *      Storing values of array into multiple variables
 */

let names = ["anup", "sanil", "rabin", "kritish"];
// let winner = names[0];
// let runnerup = names[1];

//simply this is shorthand of upper code
let [winner, runnerup, ...other] = names;   //...other => yesle aru array value laii euta array ko form ma haldinxa

console.log(winner, runnerup);

console.log(other);
console.log(winner, runnerup, other);
