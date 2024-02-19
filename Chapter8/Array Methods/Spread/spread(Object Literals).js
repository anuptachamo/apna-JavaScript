/**
 *  ? Spread with Object Literals
 */

// example
let data = {
  email: "ironman@gmail.com", //email is a key and ironman@gmail.com is a value
  password: "abcd",
};
console.log(data);

let dataCopy = { ...data, id: 123 };

console.log(dataCopy);

// next example[In this example of array, key will be the index of that value]
let arr = [1, 2, 3, 4, 5]; //value
let obj1 = { ...arr };
console.log(obj1); //obj -> key:value

//next example[In this example of string, key will be the index and value will be character]
let str = "hello"; //value
let result = { ..."hello" };
console.log(result);
