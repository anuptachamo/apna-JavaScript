/**
 *  ? Lexical scope (nested function)
 *      * a variable defined outside a function can be accessible inside another function defined after the variable declaration.
 *          The opposite is NOT true.
 */


function outerFunc(){
    let x = 5;
    let y = 6;

    function innerFunc(){
        let a = 10;
        console.log(x);
        console.log(y);
    }

    // console.log(a) //yesto chaii garna payena
    innerFunc();
}

outerFunc();