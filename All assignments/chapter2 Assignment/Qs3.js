/**
 *  ? Write a switch statement to print the months in a quarter.
 *      Months in Quarter 1 : january, February, March
 *      Months in Quarter 2 : April, May, June
 *      Months in Quarter 3 : July, August, September
 *      Months in Quarter 4 : October, November, December
 *      
 *      [Use the number as the case value in switch]
 */

let Quarter = 100;
switch (Quarter){

    case 1 :
        console.log("Months in Quarter 1 : january, February, March");
        break;

    case 2 :
        console.log("Months in Quarter 2 : April, May, June");
        break;

    case 3 :
        console.log("Months in Quarter 3 : July, August, September");
        break;

    case 4 :
        console.log("Months in Quarter 4 : October, November, December");
        break;

    default :
        console.log("Sorry their is not this type of Quarter");
}
