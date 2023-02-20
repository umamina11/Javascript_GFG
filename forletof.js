// For Let of  is basically used with the arrays and the strings
// it will give you the array element in the string and the array without the index values

let names=["priya","nik","ricky","klara","riccha","muller","shavati"];

for(let name of names){
    console.log(name);
}


// another loop is for let in
// it will give you the index of the array or string 
for( let name in names){
    console.log(name);
}
// but if we use the varibale index in place of name in for  let in loop it will give us the elements in the array 

for ( let index in names){
    console.log(names[index]);
}