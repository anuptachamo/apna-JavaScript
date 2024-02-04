/**
 *  ? Qs4. Write a JavaScript function to count the number of vowels in a String argument.
 */

/**
 *  ? Qs4. Write a JavaScript function to count the number of vowels in a String argument.
 */

let str = "anup";
let vowels = "aeiou";

function countVowelsLetter(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        let currentLetter = str[i].toLowerCase(); // Convert to lowercase for case-insensitivity

        if (vowels.includes(currentLetter)) {  //includes => letter xa ki xna vanera check garxa
            count++;
        }
    }

    console.log(`Number of vowels: ${count}`);
    return count; // Return the count if needed
}

let result = countVowelsLetter(str);
console.log(result);
