
/**
 *  ? How to add update an value 
 */
const student = {
    name : "anup",
    age : 23,
    marks : 98.9,
    city : "Ktm"
}
console.log(student)
console.log(student.city)

//updating a value of a city
console.log(student.city = "Bhaktapur")
console.log(student)

//Adding new value
console.log(student.gender = "male")
console.log(student)

// changing the marks to A
console.log(student.marks = "A")
console.log(student)

//deleting a marks
console.log(delete student["marks"])
console.log(student)