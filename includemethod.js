// includes menthod returns true if it finds the element in the array 
// and returns false if it doenot finds element asked for

const availableSizes=["S","M","L","XL","XXL","XXXL"];

const readlineSync=require("readline-sync");

const UserSize = readlineSync.question("what is your size?");

const isSizeAvailable= availableSizes.includes(UserSize);

// if size is avaialbe 
if(isSizeAvailable){
console.log("size is avaialbe");
}else{
    console.log("size is not avaialbe")
}