/**
 *  ?Array References   =>address in memory
 *      [1] == [1]   -> false
 *      [1] === [1]  -> false
 */

let arr = ['a', 'b', 'c']
let arrcopy = arr;
console.log(arr)

arr == arrcopy
arr.push('d')
console.log(arr)
console.log(arrcopy)

console.log(arrcopy.pop())
console.log(arr)
console.log(arrcopy)