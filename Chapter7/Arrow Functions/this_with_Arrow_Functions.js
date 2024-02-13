/**
 *  ? 'this' with Arrow functions
 *      *In arrow functions, this does not have its own binding. Instead, it retains the value of this from the enclosing lexical scope. This behavior is different from regular functions, which have their own this context.
 *
 *      Arrow Function                                 Normal Function
 *      1. lexical scope (nested function)              1. scope --> this  --> calling object
 *              parent => call scope
 */

const student = {
  name: "anup",
  marks: 95,
  class: "bachelor",
  age: 23,
  prop: this, // In this case this is global scope
  getName: function () {
    return this.name;
  },
  getMarks: () => {
    console.log(this); //parent scope -> window
    return this.marks;
  },

  getInfo1: function () {
    setTimeout(() => {
      console.log(this); //student
    }, 5000);
  },
  getInfo2: function () {
    setTimeout(function() {
      console.log(this); //window
    }, 2000);
  },
};
console.log(student.getName());
console.log(student.getMarks());
console.log(student.getInfo1());
console.log(student.getInfo2());