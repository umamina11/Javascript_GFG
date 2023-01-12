const readlineSync=require("readline-sync");

const number=Number( readlineSync.question ("Enter a number"));
const num= number%2;

if (num===0 )
{
    console.log ("The number is even");
}
else
{
    console.log ("The number is odd");
}
