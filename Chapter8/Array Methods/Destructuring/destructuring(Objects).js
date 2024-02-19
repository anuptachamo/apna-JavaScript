/**
 *  ? Destructuring Object
 */

const student = {
  name: "anup",
  age: 23,
  class: 12,
  subjects: ["hindi", "english", "math"],
  username: "anup@123",
  password: "abcd",
  city: "Ktm",
};

/*  yo normal 1-2 ota hune bela use garda problem hunnna tara guess 100 ota yestaii garnu paryo
    vaney yesarii garera matlab naii hunna so, we are going to use another method for it or we can
    simply called shorthand of this*/
/*let username = student.username;
        let password = student.password;*/

//shorthand of upper code
let { username: user, password: secret, city: place = "Bkt" } = student; //place = bkt is default value if you had not define as value for city
console.log(user, secret, place);
