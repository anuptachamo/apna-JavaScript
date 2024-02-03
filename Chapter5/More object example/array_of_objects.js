/**
 *  ? Array of objects
 *      Storing information of multiple students
 * 
 */

const classInfo = [
    {
        grade : "A+",
        city : "Golmadhi"
    },

    {
        grade : "A",
        city : "jagati"
    },

    {
        grade : "B+",
        city : "kamalbinayak"
    }
]

console.log(classInfo)
console.log(classInfo[0])
console.log(classInfo[0].grade)
console.log(classInfo[0].grade = "A++")
console.log(classInfo[0])

// Adding gender Key
console.log(classInfo[0].gender = "Male")
console.log(classInfo[0])