// prinitng the two arrays same using the copy by reference command and the putting a 
// spread operator : which works in array where it creates and array assign memeory and them make updates in particular that new array created 

let arr4=[1,2,3,4];
let arr5=[];

for(let number of arr4){
    arr5.push(number);
}
console.log("arr4 ",arr4);
console.log("arr5 ",arr5);
arr5.push(7);

console.log("updated arr4 ",arr4);
console.log("updated arr5 ",arr5);


// another example with string 
let str="umamina";
let arrname=[...str];
console.log("arrname ",arrname);