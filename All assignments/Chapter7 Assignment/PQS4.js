/**
 *  ? What is the output of the following code:
 */

let length = 4; // Global variable 'length' with value 4
function callback() { // Function 'callback' defined
  console.log(this.length); // Logs the value of 'this.length'  //this equals the global object, which is a window in the case of the browser environment.
}

const object = { // Object 'object' defined
  length: 5, // Property 'length' set to 5
  method(callback) { // Method 'method' defined, taking 'callback' as a parameter
    callback(); // Callback function invoked
  },
};

object.method(callback, 1, 2); // 'method' called with 'callback' as an argument
