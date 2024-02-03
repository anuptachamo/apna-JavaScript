/**
 *  ? JS Object Literals
 *      Used to store keyed collections and complex entities
 *          *property => (key, value) pair
 *          Objects are a collection of properties
 */

// Non PRimitive Data Type - Objects in JS
let bkt  = {
    latitude: "28.7041 N",
    longitude: "77.1025 E"
}

const student = {
  //key : value  
    name : "anup",
    age : 24,
    marks: 56.5,
    city: "Bhaktapur"
}

console.log(student)
console.log(typeof student)
console.log(student["name"])

const item = {
    price : 99,
    discount : 30,
    color : ["black", "red"]   //In object literals we can also store array
}

console.log(item)