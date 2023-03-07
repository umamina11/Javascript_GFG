//deep copy using spread operator

const person1={
    name: "umamina",
    age: 21,
    address: {
        city: "Jaipur",
        state: "Rajasthan",
        landmark: {
            temple: "assde0",
            shop: "grocery shop"
        }
    }
}
const copiedperson1={...person1,add:{...person1.add}}; // so here we add the address object too 
copiedperson1.name="neha";

copiedperson1.add.city="amer";             // but this line of code will change both the objects
                                         //beacuse city property is inside an another object named as address so we need to 
                                         //spread this object also

console.log(copiedperson1);
console.log(person1);



// if we have more number of nested objects then it will be more messy to use the spread operator and lead to consfusion.