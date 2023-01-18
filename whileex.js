// ask the user to enter a number , if the number  is greater than fifty then ask the user to enter a number smaller than 50 

const readlineSync=require("readline-sync");
let number= 500;

console.log(number);
while(number>=50){
     number=readlineSync.question("enter number less than 50 please"); 
}
console.log("number accepted");