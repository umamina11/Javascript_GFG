/**Data types in javascript */
/**primitive datatype =when single value is assigned to the variavble */
/***String  */
// anyting we put in inverted commas it will be given as string
let userName = "UMA"; //"" word inside this is consider as string
console.log(userName);
console.log(typeof userName); //typeof defien the datatype of the variable 

/**number */
let age = 21;       // no need to mention number in inverted commas
console.log(age);
console.log(typeof age);

let weight = 52.34;     //number  defines all fraction and natural number as number
console.log(weight);
console.log(typeof weight);

/**boolean (true or false) */
//use for ture and false conditons 
let ispasses = true; // if u get passed it will return true and if failed it will returen false

console.log(ispasses);
console.log(typeof ispasses);


/** undefined */
//undefined is a special type of variable that is not defined in javascript
let university_name;
console.log(university_name);  // it will provide undefined keyword when no value is assigned to the variable
console.log(typeof university_name);

/** null */
//null is a special type of variable that is not defined in javascript
let null_name;
console.log(null_name);
let noValue = null;
console.log(noValue);
console.log(typeof noValue);

/**complex variable : whre multipiple values are assigned to the single variable */
/**object */
const details = {name:"uma", age: 21, qualification:{}}
console.log(details);
console.log(typeof details);