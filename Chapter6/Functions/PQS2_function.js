/**
 *  ? Create a function to roll a dice and always display the value of the dice (1 to 6).
 */

function dice(){
    let rolling = Math.floor(Math.random() * 6) + 1;
    console.log(rolling)
}


dice();