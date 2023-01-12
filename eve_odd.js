/**
 * You will be given a number A. Your task is to print 
 * "Positive" if the number is positive,
 *  print "Negative" if negative and print "Zero" if it is 0.
 */
const readlineSync=require("readline-sync");

const number=Number( readlineSync.question ("Enter a number"));

if(number>0)
{
    console.log("Positive");
}else if(number<0)
{
    console.log("Negative");
}else 
console.log("Zero");