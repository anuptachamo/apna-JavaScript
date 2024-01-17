/***
 *  ?Practice Qs
 *      Qs. for the Give String:
 *          let msg = "help!";
 *          Trim it and convert it to uppercase.
 */

let msg = "help!";
console.log(msg.trim().toUpperCase());

/**
 *  ?Qs2. For the String -> let name = "ApnaCollege", predict the output for following:
 *      name.slice (4, 9);
 *      name.indexOf("na");
 *      name.replace ("Apna", "Our")
 */

let name ="ApnaCollege";
console.log(name.slice (4, 9))   //Colle
console.log(name.indexOf("na"))   //2
console.log(name.replace ("Apna", "Our"))  //OurCollege

/**
 *  ?Separate the "college" part in above string and replace "l" with "t" in it.
 */

console.log(name.slice(4).replace("l", "t").replace("l", "t"));   //Cottege
