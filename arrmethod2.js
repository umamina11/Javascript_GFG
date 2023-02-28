// Array methods: pop, slice and splice

//pop: it will remove the lat elemnt from an array

let courses=["HTML","CSS","JavaScript","reactjs","Angular","django"];

console.log("courses ", courses)
courses.pop();

console.log("updated courses ",courses);

let removeItem =courses.pop();
console.log("removed item ",removeItem);


//when we want to remove the item from the middle of the list 
// we use the slice 
// it gives shallow copy

let value =courses.slice(3,4);      // delete all elements from starting from index 3 to index 4 but not 4th  index value
console.log("value ",value);
console.log(courses);


// slice in  string 
let firstname="umaminaa";

let firstUperCaseChar=firstname[0].toUpperCase();
let captialisename= firstUperCaseChar+firstname.slice(1);

console.log("captialise Name ",captialisename);


//SPLICE

courses.splice(4,2);

console.log("updated courses after splice ",courses)
