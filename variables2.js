/** with var we can declare same variable again and again */
var message = "hello";
var message = "hi";
var message = "namesta";
console.log(message); 


/**testing with let which is a failure */
let message = "hello";


console.log(message); 

/** testing with const which is again a failure as it is constant throughout the code*/
const text = "happy";
console.log(text); 

/***conclusion 
 * with var we can redeclare the variable and update the varibale value
 * with let we cannot redeclare the varibale but we can update the values
 * with const neither we can redeclare the variable nor we can update the variable value
 */