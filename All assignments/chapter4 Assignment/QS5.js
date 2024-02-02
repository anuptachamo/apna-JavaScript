/**
 *  ? Find the largest number in an array with only positive numbers.
 */

let arr = [80,55,22,66,22,3,12]
let largest = 0;

for (i = 0; i <=arr.length; i++){
    console.log(arr[i])
    if(largest < arr[i]){
        largest =arr[i]
    }
}
console.log(largest)