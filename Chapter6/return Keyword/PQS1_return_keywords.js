/**
 *  ? Create a function that return the sum of numbers from 1 to n.
 */
let sum =0;
function getSum(n){
    for(i = 1;  i<=n; i++){
        sum = sum + i;
        console.log(sum)
    }
    return sum;
}

console.log(getSum(2));

