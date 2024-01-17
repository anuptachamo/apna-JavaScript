/**
 *  ?replace
 *      Searches a value in the string and returns a new string with the value replaced.
 *      
 *      let str = "IloveCoding";
 *      
 *          str.slice("love", "do")   //"idoCoding"   --simply yo code le love ko thau ma do replace gardeu vaneko ho
 *          str.slice("o", "x")       //"IlxveCoding"  --simply yo code le o letter ko thau ma x replace gardeu vaneko ho
 */

let str = "IloveCoding";

console.log(str.replace("love", "do"))
console.log(str.replace("o", "x"))

let msg = "anupanupanup";
console.log(msg.replace("anup", "broker"))


/**
 *  ?repeat
 *      Returns a string with the number of copies of a string
 *      
 *      let str = "Mango";
 *      
 *          str.repeat(3)   //MangoMangoMango
 */

let str2 = "Mango";
console.log(str2.repeat(3))
