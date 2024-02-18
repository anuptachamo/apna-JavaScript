/**
 *  ? Filter
 *      The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
 *
 * let newArr = arr.filter(some function definition or name);
 *
 */

let nums = [2, 4, 1, 5, 6, 2, 7, 8, 9, 10];
let even = nums.filter((num) => num % 2 == 0);
console.log(even);
