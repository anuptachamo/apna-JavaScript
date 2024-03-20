/**
 * 1. Run html code with live server
 * 2. open sources tab in browser (right side of console)
 * 3. open JS file (breakpoint.js)
 * 4. then, all JS code will show
 * 5. now, choose breakpoint, i had choose line no. 22 (just click on it)
 * 6. now just click DOWN ARROW 
 */


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