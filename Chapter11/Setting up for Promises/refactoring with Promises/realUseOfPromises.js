/**
 *  ?Promises
 *      The Promise object represents the eventual completion (or failure) of an aynchronous operation and its resulting value.
 *
 *
 *  ?simply first understand Promises is a object.
 *      ?In Promises we have resolve and reject, mean success and failure.
 *      ?In Promises we have then() and catch() function, then is use after fulfilled and catch is use after reject
 */

function savetoDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("success: Data was saved");
    } else {
      reject("failure : weak connection");
    }
  });
}

savetoDb("Something Special")
  .then(() => {
    console.log("Data1 saved.");
    return savetoDb("helloworld");
  })
  .then(() => {
    console.log("data2 saved");
    return savetoDb("anup");
  })
  .then(() =>{
        console.log("Data3 saved");
  })
  .catch(() => {
    console.log("promise was rejected");
  });
