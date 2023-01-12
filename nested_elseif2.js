
//combining the  two conditions in the in the two condtinal statement 
// for combining the condtions there are certain operator that need to be used
// first one is " &&" which is used whhen the given two conditions are true
// second operator is "||" called as or where wither one condtion need to be true

const readlineSync=require("readline-sync");

const number=Number( readlineSync.question ("Enter a number"));

const reminderofTwo = number % 2;
const reminderofFour = number % 4;
const remindeofTen = number % 10;

if (reminderofTwo === 0 && reminderofFour === 0)
{
    console.log(" divisible of two and 4");

}else if ( reminderofTwo === 0 || reminderofFour === 0)
{
    console.log(" here is the or condition situation either the number is divisible of  two or three");

}else if( reminderofTen === 0){
    console.log( "number is divisible by ten ")
}
else 
console.log("number can be divisisible by 2,4 and 10");