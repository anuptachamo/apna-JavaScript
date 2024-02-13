/**
 *  ? Miscellaneous Topic
 *      *Arrow function
 *          const func = (arg1, arg2..) => {function definition}
 *
 *
 */

// example of arrow function
const sum = (a, b) => {
  console.log(a + b);
};
sum(1, 2);

const cube = (c) => {
  //parenthesis is not compulsory while using single argument
  console.log(c * c * c);
};
cube(2);

const hello = () => {
  //parenthesis is compulsory while their is not any argument
  console.log("hello world");
};
hello();