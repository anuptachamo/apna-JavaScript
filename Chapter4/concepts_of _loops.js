/*
* LOOPS
    - The word means to repeat. To repeat any block of code or instruction as per requirements.
    - IN programming, we do have control of how loop should perform and it should perform.
    - Also, we do have different types of data (i.e different data types), so the nature of using looping various, for which we do use various looping constructs defined in the programming language.
    - The main beneficial part of loop is we can make loop for dynamic values and data too.
    - The various loop in JS are  : for, while loop, do-while loop, etc.
*/

//* for loop example
/**
 *  ?Loops
 *      * Used to iterate a piece of code
 * 
 *      ?for loop
 *          for (initialization; condition; updation){
 *                  do something
 *              }
 *          
 *              for (let i = 1; 1<=5; i ++){
 *                  console.log(i);
 *              }
 */
    for (let i = 0; i<=3; i++){
        console.log("Test")
    }

    //* while loop example
    /**
     *  ?while loop
     *      while (condition){
     *          do something
     *      }
     * 
     *      let i = 1;
     *      while (i <=5){
     *          console.log(i)
     *          i++;
     *      }
     *  
     *      while loop ma  pahila condition check garxa anii matra vitra jana dinchha
     */
    
    let j = 0
    while ( j <=2 ){
        console.log("This is while loop")
        j++
    }


    //* do while loop example
    // -- do while loop ma chae pahilai kaam garxa condition kei herdaina for the first time anii matra condition check garxa. anii condition milxa vaney matra ferii vitra ko kaam laii repeat garne vayo.
    let k =0
    do{
        console.log("do while loop")
        k++
    } while (k <=2)

    // Next example of while loop
    const cities = ["Bkt", "Jagati"]
    for (let a = 0; a < cities.length; a++ ){
        console.log(cities[a])
    }

    //for each loop
    //foreach ma function vitra function nii pass garna milxa
    const country = ["Nepal", "ktm"]
    country.forEach(function(value , index){   //function ko 1st parameter ma value hunchha jahile anii 2nd ma index
        console.log(value)
    })


    /*
    * For of loop
        - The for...of loop was introduced in the later versions of javascript ES6.
        - The for...of loop in javaScript allows you to iterate over iterable objects (arrays, sets, maps, strings etc)
        - The syntax of the for...of loop is:
            for (element of iterable){
                //body of for...of
            }
            Here,
                - iterable - an iterable object (array, set, strings, etc).
                - elements - items in the iterable
    */

    //example of for of loop
    const studentsList = ["anup", "Kritish"] //this is array
    for (let student of studentsList){
        console.log(student)
    }

    //example of for of loop
    const test = "test1"  //this is a String
    for (let testing of test){
        console.log(testing)
    }