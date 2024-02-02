/**
 *  ?Loops with Arrays
 *      Nested Loops with nested Arrays
 */

let heroes = [ ["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"]];
for ( let i = 0; i<=heroes.length; i++){
    console.log(`List ${i}`) // Template literals  -- `${Expressions}`
    for( let j = 0; j<=heroes[i].length; j++){
        console.log(heroes[i][j])
    }
}