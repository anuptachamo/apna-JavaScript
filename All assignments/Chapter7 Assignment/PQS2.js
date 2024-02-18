/**
 *  ? Write an arrow function named isEven() that takes a single number as argument and return if it is even or not.
 */

const isEven = (number) => {
  if(number % 2 == 0){
    console.log("Even number");
  }else{
    console.log("Not a even number");
  }
};
isEven(101)