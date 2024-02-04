/**
 *  ?Qs1. Write a JavaScript function that returns array elements larger than a number.
 * 
 * number vanda thulo array ma vako sabaii number print gara vaneko 
 */

let arr = [1,5,7,10,55,3];
let num = 2;

// element larger than a number num
function getElement(arr, num){
    for (i =1; i<arr.length; i++){
        if(arr[i] > num){
            console.log(arr[i])
        }
    }
}

getElement(arr, num);