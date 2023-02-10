// string method=" indexOf"
// indexOf givens the index of the character asked 


// Write a code where that finds in the index of "a" from 0 index and "u" from index value 12

//given string is ="I have been working here under mr. Udya from last 1 year."
const text="I have been working here under mr. Udya from last 1 year.";

console.log(text.indexOf("a"));
console.log(text.indexOf("u", 12));

// it will give -1 if the given character is not present in the given string 
console.log(text.indexOf("z"));
console.log(text.indexOf("q"));