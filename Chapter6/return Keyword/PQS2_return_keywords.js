/**
 *  ? Create a function that returns the concatenation of all strings in an array.
 */
let arr = ["anup", "sanil", "kritish"]

function cocatStrings(arr){
    let result = "";

    for(let i =0; i<arr.length; i++){
        result += arr[i];
        console.log(result)
    }

    return result;
}

cocatStrings(arr)