// adding property to object
//computing property



const readlineSync=require("readline-sync");
const key=readlineSync.question("Ask me a question(age/name/city/state).");

const courses=readlineSync.question("which course will you choose(html/css/javascript/react)")
const obj={
name: "uma mina",
age: 21,
[courses]:"courses not availbale"                  
}

obj.city="Jaipur";
obj.state="Rajasthan";

console.log(obj);

console.log(obj[courses]);