/**
 *  ? forEach
 *      definition -->The forEach() method of Array instances executes a provided function once for each array element.
 * 
 *      forEach simply bujnu parda => forEach single single elements lai define garna use garxa
 *      
 * 
 *      arr.forEach(some function definition or name);
 */

let arr = [1, 2, 3, 4, 5];
function print(el){
    console.log(el);
}

arr.forEach(print)


//OR(Alternative --using normal function)

arr.forEach(function(el){
    console.log(el);
})

//OR(using arrow function)
arr.forEach( (el)=>{
    console.log(el);
})



// Another example
let somth = [{
    name : "anup",
    marks: 90,
},
{
    name : "kritish",
    marks: 95,
},
{ 
    name : "sanil",
    marks: 80,
}]

somth.forEach((student) =>{
    console.log(student.marks);
})