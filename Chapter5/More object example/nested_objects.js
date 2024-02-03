/**
 *  ? Nested object 
 *      Object of object (object ko vitra arko object)
 *      storing information of multiple students
 */

const classInfo = {
    anup : {
        grade : "A+",
        city : "Golmadhi"
    },

    sanil : {
        grade : "A",
        city : "jagati"
    },

    kritish : {
        grade : "B+",
        city : "kamalbinayak"
    }
}

console.log(classInfo)
console.log(classInfo["anup"])
console.log(classInfo["anup"].city)

// updating city of anup key
console.log(classInfo["anup"].city = "Koteshwor")
console.log(classInfo.anup)