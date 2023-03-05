// adding property to object
//computing property



const readlineSync=require("readline-sync");
const key=readlineSync.question("Ask me a question(age/name/city/state).");

const obj={
name: "uma mina",
age: 21
}

obj.city="Jaipur";
obj.state="Rajasthan";

console.log(obj);

console.log(obj[key]);