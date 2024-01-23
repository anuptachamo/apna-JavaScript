/**
 *  ? Array Methods
 *      *splice : removes / replace / add elements in place
 *          splice (start, deleteCount, item0...itemN)
 */

let colors = ["red", "yellow", "blue", "orange", "pink", "white"]

//removing from array index 4
console.log(colors.splice(4))
console.log(colors)

//removing from array index 0 to 1
console.log(colors.splice(0, 2))
console.log(colors)

// adding element in place of blue
console.log(colors.splice(0, 1, "black", "grey"));
console.log(colors)

// adding new elements in zero index
console.log(colors.splice(0, 0, "brown", "gray"))
console.log(colors)

//replacing gray color with purple of index 1
console.log(colors.splice(1, 1, "purple"))
console.log(colors)