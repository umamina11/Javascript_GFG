//object referecing and the shallow copy

const person1={
    name:"uma Mina",
    age: 21
}

console.log(person1);
const person2=person1;

console.log(person2);

//updating the name of person two

person2.name="Neha ";
 console.log("updates",person2);
 console.log("updated",person1);

 //**objects are not copies by reference but by reference


// deep copy to deal with the shallow copy 
//where change in one onject will make change in rest of its objetcs 
// like the above scenario


const member1={
    name:"umamina",
    age: 21,
    email: "umamina11@gamil.com",
    address:{
        city: "jaipur",
        state: "rajasthan"
    }
}
const member2= Object.assign({},member1);
member2.name="neha";
console.log("updated ",member1);
console.log("updated ",member2);

member2.address.city="pune";

console.log("city updates",member2);
console.log(member1);