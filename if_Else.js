// assigning the value to the variable and accordingly print the result 
const userAge = 21;

if( userAge>18){
    console.log(" You are an adult");
}
else
    console.log(" You are an minor");


// taking the input from the user and then print the result as per condition 
const readlineSync=require("readline-sync");
const userAges= readlineSync.question( "How old are you?");
if( userAges>18){
    console.log(" You are an adult");
}
else
    console.log(" You are an minor");
