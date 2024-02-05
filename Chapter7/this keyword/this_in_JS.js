/**
 *  ? 'this' in javaScript
 *      * "This" keyword refers to an object that is executing the current piece of code.
 *      
 *      this keyword is a special keyword that is implicitly defined in every function.
 *      Its value depends on how the function is called, and
 *      it allows access to the object it belongs to or, in the case of global functions,
 *      the global object.
 */

const student = {
    name : "anup",
    age : 23,
    eng : 90,
    math : 100,
    comp : 95,
    getAvg(){
        console.log(this)  //here we can understand 'this' as simple object of a student
        let avg = (this.eng + this.math + this.comp)/3
        return avg
    }
}
const average = student.getAvg()
console.log(`${student.name} got average marks = ${average}`)