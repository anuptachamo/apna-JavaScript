/**
 *  ?Print the multiplication table for 5
 * 
 */
let n = prompt("Write your multiplication table number")
n = parseInt(n)
    for(i = n; i<=n*10; i = i+n){
        console.log(i)
    }