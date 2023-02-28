// array methods: split and join
//split: method of string
//join method of array
//both work in cojunction 

// best exmaple is plandrome: which is same if read from front or end: madam

const inputStr="madam";
const arr=[1,2,3,4];
console.log(arr.reverse());

const arrOfChar=inputStr.split(""); // in split we need to defined the method through which we need to split the array like after ech letter or after each spce or whatever 
                                     //by default the array got split with spaces 
                                    // convert into array
 arrOfChar.reverse();

const reversedStr=arrOfChar.join("");    //join: covert back into string

console.log(arrOfChar);

console.log(reversedStr);

const reversedStr2=arrOfChar.join(","); // can join array with characeters between them
console.log(reversedStr2);