/**
 *  ? NaN in JS
 *      * The NaN global property is a value representing Not-A-Number.
 *              !0/0
 *              !NaN - 1
 *              !NaN * 1
 *              !NaN + NaN
 */
a = 0;
b= 0;
c = a/b;
console.log(c);
console.log(typeof c);    //number