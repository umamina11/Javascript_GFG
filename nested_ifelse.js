// in if else condition the first condition is true then it will stop and print the reult
//without checking the next condition
//for example in this snippet if user gave the number 30 which is divisible by both 3 and five 
// but as the code will run it checks the first condition and goves the result "divisible by 3" it 
//will not move to the another condition

const readlineSync=require("readline-sync");

const number=Number( readlineSync.question ("Enter a number"));

const reminderOfThree= number % 3;
const reminderOfFive= number % 5;

if(reminderOfThree === 0){
    console.log("divisible by 3")
} else if( reminderOfFive === 0){
    console.log("divisible by 5");
}


//if we put both the condtions in if stament then it will print both the conditions
// then it well print both the results as the if condition is need to be checked everytime 

const reminderOftwo= number % 2;
const reminderOfSix= number % 6;

if(reminderOftwo === 0){
    console.log("divisible by 2")
} else if( reminderOfSix === 0){
    console.log("divisible by 6");
}
else
console.log("not divisible by 2 and6 both");


