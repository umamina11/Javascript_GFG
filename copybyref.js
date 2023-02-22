// copying and array --> array reference

let arr1=[1,2,3,4,5,6,7,8,9,0];
let arr2=arr1;                          // shallow copy where variales are responsibel for making change in their values
                                       // here the arra1 and arr2 both are responsible for chanigin each other vales if we add, remove , conver elment in one arr it will automatically get change in another array

console.log("array 1 " +arr1 );
console.log("array 2 " +arr2);

arr2.push(10);

console.log("array 2 " +arr2);
console.log("array 2 " +arr1);




// spread operator : to deal with the shallow 
let arr3=[...arr1];
console.log("array 3 " +arr3);
arr3.push(11);
console.log("updated arr1 "+ arr1);
console.log("updated arr3 "+arr3);