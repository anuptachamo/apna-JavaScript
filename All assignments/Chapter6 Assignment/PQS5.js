/**
 *  ? Qs5. Write a JavaScript function to generate a random number within a range (start, end).
 */

function generateRandomNumber(start, end) {
    let diff = end - start;
    let number = Math.floor(Math.random() * diff) + start;
    console.log(number);
    return number;
}

generateRandomNumber(1, 10);
