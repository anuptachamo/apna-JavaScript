/**
 *  ?Await Keyword (simply await laii bujnu parda waiting haii intezar karna)
 *      paused the execution of its surrounding async function until the promise is settled (resolved or rejected)
 */

function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      console.log(num);
      resolve();
    }, 1000);
  });
}

async function demo() {
 await getNum()
 await getNum()
 await getNum();   //yo case ma await bida random number return garna khojda random number ekchotii maii print hunxa, tara await halyo vaney chaii 1 sec paxii matra aru numbers print hundai janxa 
 console.log("All random number printed successfully");
}
