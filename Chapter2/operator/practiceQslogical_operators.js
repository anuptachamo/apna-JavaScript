/**
 *  ? Practice Qs
 *      *Qs. A "good string" that starts with the letter 'a' & has a length > 3. Write a        program to find if a string is good or not.
 */

let name1 = "anup";
let name2 = "matina";

if ((name2[0] ==="a") && (name2.length >= 3)){
    console.log("String is good");
}else{
    console.log("String is bad");
}

/**
 *  ? Predict the output of following code :
 * 
 */

let num = 12;

if ((num%3 === 0) && ( (num + 1 == 15) || (num - 1 == 11) ) ){
    console.log("safe");
}else{
    console.log("unsafe");
}  //output: safe
