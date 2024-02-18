/**
 *  ? What is the output of the following code:
 */

const object = {
  message: "Hello, World!",

  logMessage() {
    console.log(this.message); //this equals the global object, which is a window in the case of the browser environment.
  },
};

setTimeout(()=>object.logMessage(), 5000);
