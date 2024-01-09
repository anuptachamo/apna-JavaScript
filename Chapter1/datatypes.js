// nn bb ss u -Primitives in js
let a = null; //Null
let b = 345;  // Numbers
let c = true;  //can also be false --boolean
let d = BigInt ("555") + BigInt("5") //BigInt
let e = "Anoop" //String
let f = Symbol("I am a nice symbol") //--Symbol
let g = undefined //--undefined

console.log(a, b, c, d, e, f, g)

// how to know which types of datatype is:
console.log(typeof d)

// Non PRimitive Data Type - Objects in JS
const item ={
    "Anup" : true,
    "Matina" : false,
    "Maiya"  : 21,
    "Anjana" : undefined
}
console.log(item["Matina"])
console.log(item[typeof "Matina"])

/*const store ={
    name : "Gj",
    phone : "9843678987"
}
console.log(store)
*/