
// deep copy by creating a function 

const obj={
    name: "Uma Mina",
    age: 21,
    address:{
        city: "Jaipur",
        state: "Rajasthan"
    }
}
console.log(Object.keys(obj));
//adding an key and value to the object in different ways 
//1
obj.pinCode="302033";
//2
obj["pinCode"]="302033";
//3
let key="pinCode";
obj[key]="302033";

console.log(obj);


// funciton to make a copied object 
function getCopiedObjcet(source){
 const targetObj={};
 const keys=Object.keys(source);
 for(let key of keys){
 //   targetObj[key]=source[key]
if(typeof source[key]==="object"){
    targetObj[key]=getCopiedObjcet(source[key]);
    
}else
targetObj[key]=source[key];
 }
 return targetObj;
}
const copiedObj=getCopiedObjcet(obj);

copiedObj.name="Neha Mina"
console.log("original object",obj)
console.log("new copied object",copiedObj);