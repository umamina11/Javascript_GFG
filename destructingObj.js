// Destructing object : unpacking 

let obj ={
    name: " uma mina",
    address: {
        state: "rajasthan ",
        city: "jaipur",
        locality: "pratapnagar"
    },
    courses: ["HTML","CSS","JS","ractjs"],
}
//1
//let {name, address, courses} =obj;            // this will give the whole details given in the oject 


console.log(name);
console.log(address);

let numbers=[1,2,3];

let [a,b,c]=numbers;                       

// but if we want to print name only then we 

//let {name}=obj;
//console.log(name);


//chaning the property to another name

let {name: UserName}=obj;

console.log(typeof name);

console.log(UserName);



//let{address:{city}}=obj;
console.log(city);



//2

let {name,address:{state,city,locality},courses}=obj;
console.log(city);