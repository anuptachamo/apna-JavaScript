/**
 *  ? Reduce
 *      Finding maximum in an array
 */



// using loop 
let arr = [2, 3, 4, 5, 3, 4, 7, 8, 1, 2];
let maximum = -1;
for ( let i = 0; i <arr.length;i++){
    if (maximum < arr[i]){
        maximum = arr[i]
    }
}
console.log(maximum);



// using reduce method
let nums = [2, 3, 4, 5, 3, 4, 7, 8, 1, 2];

let result = nums.reduce((max, el) => {
  if (el > max) {
    return el;
  } else return max;
});

console.log(result);