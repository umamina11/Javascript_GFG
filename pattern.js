// print this pattern 
/**
 * *
 * * *
 * * * *
 * * * * *
 * * * * * *
 * * * * *
 * * * *
 * * *
 * *
 */
const symbol="* ";
for(let i=1; i<=5;i++){
    console.log(symbol.repeat(i));
}
for(let i=4; i>=1;i--){
    console.log(symbol.repeat(i));
}



// print the pyramid pattern
/**
 *     *
 *    * *
 *   * * *
 *  * * * *
 * * * * * *
 */
console.log("--------------------------------------------");
for(let p=0; p<5; p++){
    console.log(" ");

for(let q=0; q<=p; q++)
{
    console.log(symbol);
}
}