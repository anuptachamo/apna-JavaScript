/**
 *  ? Single threaded
 * 
 *      To understand why JavaScript is single-threaded, we first need to define what it means for a language to be single-threaded. A single-threaded language is one that can execute only one task at a time. The program will execute the tasks in sequence, and each task must complete before the next task starts. Other languages, like Python or Java, are multi-threaded and can execute multiple tasks simultaneously.
 */

setTimeout(() => {
  console.log("anup tachamo");
}, 2000);

console.log("hello...");
