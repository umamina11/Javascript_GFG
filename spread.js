//spread method

const arr=[1,2,3,4,5];

console.log(arr);
console.log(...arr);     // spreading the array that measn unpacking the array
                         // it avoid mutation (not changing the array)

const arr1=[2,4,6,8];
const arr2=[...arr,...arr1];        // merging the two arrays
console.log(arr2);
