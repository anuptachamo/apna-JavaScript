/**
 *  ? creating arrays
 *      let marks = [99, 85, 93, 76, 62];
 *      let names = ["sanil", "kritish", "anup"];
 *      let info = ["anup", 25, 6.1]   //mixed array
 *      let newArr = [];   //empty array
 */

let marks = [99, 85, 93, 76, 62];
    let names = ["sanil", "kritish", "anup"];
    let info = ["anup", 25, 6.1]   //mixed array
    let newArr = [];   //empty array

    console.log(info)
    console.log(info[0])   //find first string value
    console.log(info[0][0]) //find first string value and first string index[0]


/**
 *  ? arrays are Mutable
 *      
 */

let fruits = ["mango", "apple", "litchi"];
console.log(fruits)

    fruits[0] = "banana";
    console.log(fruits)
    console.log(fruits.length)

    fruits[10] = "papaya";
    console.log(fruits)
    console.log(fruits.length)
    