/**
 *  ?Async Functions (async and await Keywords)
 *
 *  The async function declaration creates a binding of a new async function to a given name. The await keyword is permitted within the function body, enabling asynchronous, promise-based behavior to be written in a cleaner style and avoiding the need to explicitly configure promise chains.
 */

// async Functions Example
async function greet() {
  throw "weak connection"; //if there is an any error, this message will return
  return "hello!"; // return a promise
}

greet()
  .then((result) => {
    console.log("promise was resolved");
    console.log("result was : ", result);
  })
  .catch((err) => {
    console.log("promise was rejected with err: ", err);
  });

//  async Arrow function
let demo = async () => {
  return 5;
};
