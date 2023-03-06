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

 
