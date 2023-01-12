const readlineSync=require("readline-sync");

const number=Number( readlineSync.question ("Enter a number"));
const num= number%2;

if (num===0 )
{
    console.log (number + " The number is even");
    if(number% 4===0 ){
        console.log (number + " The number is divisible by 4");
    }else{
        console.log (number + " The number is not divisible by 4");
    }
}
else
{
    console.log ("The number is odd");
    if(number%5===0){
        console.log (number + " The number is divisible by 5");
    }
}
