/**
 *  ? Thread / Twitter Post
 *      Create an object for the properties of thread/ twitter post which include -
 *          username
 *          constant
 *          likes
 *          reposts
 *          tags
 */

const post = {
    username : "anuptachamo",
    content : "coder hard earn hard",
    likes : 1000,
    reposts : 10,
    tags : ["@tachamoanup","@sanilkoju"]
}

console.log(post)
console.log(post["likes"])

// alternative
console.log(post.likes)