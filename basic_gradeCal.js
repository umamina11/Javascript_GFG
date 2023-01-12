
const readlineSync=require("readline-sync");

const number=Number(readlineSync.question ("Enter your grades"));

if(number>=98){
    console.log("A+");
}
else if(number>=95){
    console.log("A");
}else if(number>=85){
    console.log("B+");
}else if(number>=75){
    console.log("B");
} else if (number>= 60){
    console.log("C+");
}else 
console.log("Need improvement");
