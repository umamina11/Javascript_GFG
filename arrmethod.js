// array methods push and concat


// mutable Object (that change be changed) OR imuntable objects (unchangeable )

let fruits=["apple","mango","banana"];
console.log(fruits);
fruits.push("orange");
console.log(fruits);

// if we want to push many items 

fruits.push("kiwi","melon","berries");
console.log(fruits);


// concat
let arr1=[1,2,3,4];
let arr2=[0,9,8,7];

let arr3=arr1.concat(arr2)

console.log(arr3);
let arr4=[4,5,6,6];

let arr5=arr1.concat(arr2,arr3,arr4);
console.log(arr5);