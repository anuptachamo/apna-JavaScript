/**
 *  ? Practice QS
 *      Qs. For the given start state of an array, change it to final form using methods.
 *          start : ['january', 'july', 'march', 'august']
 *          final : ['july', 'june', 'march', 'august']        
 *          
 */

let months = ['january', 'july', 'march', 'august'];
console.log(months)

console.log(months.shift())
console.log(months.shift())
console.log(months)

console.log(months.unshift('july', 'june'))
console.log(months)
