//? Call Stack [last In First out]
/**
 * A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function, etc.
 */

function hello() {
  console.log("inside hello function");
  console.log("hello");
}

function demo() {
  console.log("calling hello function");
  hello();
}

console.log("calling demo function");
demo();
console.log("done, bye!");

// Visualizing the call stack (example)
function one() {
  return 1;
}

function two() {
  return one() + one();
}

function three() {
    let ans = two() + one();
    console.log(ans);
}

three();
