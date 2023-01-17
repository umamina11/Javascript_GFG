/**
 * Given an integer s. Write a program to print the Right angle triangle wall. The length of perpendicular and base is s.  Use single loop and string multiplication.
 */
const readlineSync=require("readline-sync");

const number=Number( readlineSync.question ("Enter a number"));
   
const symbol="* ";
for(let i=1; i<=number;i++){
    console.log(symbol.repeat(i));
}

console.log("----------------------------------------------------------------");
/**
 * Given an integer s. Write a program to print the Inverted "Right angle triangle" wall. 
 * The length of the perpendicular and base is s.
 * Use a single loop and string multiplication.
 */

for(let i=number; i>=1;i--){
    console.log(symbol.repeat(i));
}
