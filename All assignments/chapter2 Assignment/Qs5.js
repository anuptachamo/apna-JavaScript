/**
 *  ?Qs5 write a program to find the largest of 3 numbers.
 *      
 */

let a = 5;
let b = 18;
let c = 200;

if(a > b){
    if (a > c){
        console.log(a, "is largest");
    }else{
        console.log(c, "is largest")
    }
}else{
    if (b > c ){
        console.log(b, "is largest");
    }else{
        console.log(c, "is largest");
    }
}