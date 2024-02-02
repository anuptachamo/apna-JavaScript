/**
 *  ? choose favorite movies
 * 
 */     

const fav = "Avatar";   //permanent value chaine le const use gareko
let guess = prompt("What is your Favorite movie");

while((guess != fav) && (guess != "quit")){  //&& => euta condition matra true vayenii chalxa 
    guess = prompt("wrong guess. try again!")
}

if(guess == fav){
    console.log("congrats!!")
}else{
    console.log("You quit")
}