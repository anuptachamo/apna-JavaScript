/**
 *  ? Qs2. Write a JavaScript function to extract unique characters from a string.
 *      *Example: str = “abcdabcdefgggh”
 *      *ans = “abcdefgh”
 */


str = "aaaannupppp";

// function to get String with all unique elements
function uniqueCharacter(str){
    let ans = "";
    for( let i =0; i<str.length; i++){
        let currChar = str[i];

        if (ans.indexOf(currChar) == -1){
            ans += currChar;
        }
    }

    return ans;
}

let result = uniqueCharacter(str)
console.log(result)