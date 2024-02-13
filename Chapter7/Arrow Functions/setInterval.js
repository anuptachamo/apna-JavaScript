/**
 *  ? Arrow Function
 *      * Set Interval
 *          setInterval (function, timeout) // function => callback function, timeout => time(it take time as miliSec [1000ms = 1s])
 * 
 *          In set interval, it will run multiple time
 *          for example:
 *              setInterval( () =>{
                    console.log("tachamo anup")
                }, 2000)

                In this example we have set a time 2000ms =2s, after a execution, again after 2sec it will execute a multiple time after a 2sec

 *          
 */

// In this example we have set a time 2000ms =2s, after a execution, again after 2sec it will execute a multiple time after a 2sec
let id = setInterval( () =>{
    console.log("tachamo anup")
}, 2000)

clearInterval(id)  //clearInterval is use to stop a running execution but for that we needed to pass an id for clearInterval


let id2 = setInterval( () =>{
    console.log("tachamo anjana")
}, 3000)

clearInterval(id2)


