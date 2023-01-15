/** nullish coalescing
 * ??: calles as nullish coaelsing whihc is use for the null or undefiened values
 * 
 * 
 */

const fanme=" uma ";
console.log(fanme?? "hinden value");


let lname;
console.log(lname ?? "value");


// differnece between null an dthe nullishing values is that the 
//OR opertaor will take the consideration of all the truly and the false values while printing the output
//but the nullish operator will not it will go for only undefinedf and the null values to get print the result
 let a= 5;
 let b;
 console.log(a+(b || 0));
 console.log(a+(b?? 0));
 console.log(a+(b ?? 0));