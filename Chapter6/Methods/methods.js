/**
 *  ?Methods
 *      * Actions that can be performed on an object.
 */

const calculator = {
    add : function (a, b){
        return a+b;
    },

    sub : function (a, b){
        return a-b;
    },

    Mul: function (a, b){
        return a*b;
    },
}

let operator = calculator.add(1,2)
console.log(operator)


// methods (shorthand)
const cal ={
    div(c, d){
        return c/d;
    },
    pow(c, d){
        return c ** d;
    }
}
console.log(cal.pow(4,2))