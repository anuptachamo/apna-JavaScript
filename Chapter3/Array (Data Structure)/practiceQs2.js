/**
 *  ? Practice QS2
 *      Qs. For the given start state of an array it final form using splice.
 *          start: ['january', 'july', 'march', 'august']
 *          final: ['july', 'june', 'march', 'august']
 */
let months = ['january', 'july', 'march', 'august']
console.log(months.splice(0, 2, "july", "june"))
console.log(months)

/**
 *  ?Qs. Return the index of the "javaScript" from the given array, if it was reversed.
 *      ['c', 'c++', 'html', 'javaScript', 'python', 'java', 'c#', 'sql']
 */

let lang = ['c', 'c++', 'html', 'javaScript', 'python', 'java', 'c#', 'sql']

console.log(lang.reverse())
console.log(lang.reverse().indexOf('javaScript'))
console.log(lang)