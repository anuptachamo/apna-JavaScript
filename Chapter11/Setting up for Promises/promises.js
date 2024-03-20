/**
 *  ?Promises
 *      The Promise object represents the eventual completion (or failure) of an aynchronous operation and its resulting value.
 */

function savetoDb(data, success, failure) {
  let internetSpeed = Math.floor(Math.random() * 10) + 1;
  if (internetSpeed > 4) {
    success();
  } else {
    failure();
  }
}

savetoDb(
  "something",
  () => {
    console.log(" success : Your data was saved");
    savetoDb(
      "hello world",
      () => {
        console.log("success2: data2 saved");
        savetoDb(
          "anup",
          () => {
            console.log("success3: data3 saved");
          },
          () => {
            console.log("failure3 : weak connection");
          }
        );
      },
      () => {
        console.log("failure2 : weak connection");
      }
    );
  },
  () => {
    console.log(" failure : weak connection. data not saved");
  }
);
