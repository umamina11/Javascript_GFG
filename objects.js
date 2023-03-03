//Objects

//create an object

const obj={};       //object literal

//console.log(typeOf.obj);

// adding values are  called properties which are made up of key and value

const objs={
    name: "uma mina",
    age: 21,
    job: "Student",
    courses: ["html","css","js"],
    "is admin": "true"                      // when we have two or more word property then we need to put it under double quotes 
};

console.log(objs);      // getting all values or properties 


console.log(objs.age);       // getting particular values or properties 



console.log(objs["job"]);    // another way of accessing the values of properties

console.log(objs["is admin"]);  // accessing the values of the property whihc has two or more words in it 

