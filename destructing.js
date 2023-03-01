// destructing array: unpacking an object

//storing values with individual variables 

const numbers=[1,2,3,4,5];

const [a,b,c]=[1,2,3];

console.log(a);
console.log(b);
console.log(c);


// another example
const arr=['a', 'b', 'c'[1,2,3,4]];

const [courses,...rest]= arr;

console.log(rest);
console.log(courses);

//swaping the numbers

let p = 5;
let q = 29;
[p,q] = [q,p];
console.log("value of P ",p);
console.log("value of Q ",q);