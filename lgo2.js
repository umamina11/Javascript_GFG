/** logical operators part 2
 * OR
 * AND 
 * turly 
 * falsly: "", 0, null, undefined 
 * 
 */

let firstname=" Uma";
let secondname="Mina";
const uname=firstname|| secondname;
console.log(`Name:${uname}`);

//console.log(firstname || secondname); 

// trying with the undefined and the null values to see the results
const fnum= null;
const snum= undefined;
console.log(fnum || snum);





let a= 23;
let b;
console.log(a+b);// here the output will be NaN as b value is undefined
// to deal this situation we provide a condition that is where if the b is not defined then take it 0
console.log(a+(b||0));



// using the AND operatror 
let fname=" Uma";
let sname="Mina";
const username=fname && sname;
console.log(`Name:${username}`); // here the output will give the sname beacuse the AND operator first look for the falsy value
                                // irrespective truly values present or not it will always look for falsy value and get that at console
                                
// we always use the OR operatopr for the short circuting rather than AND operator 