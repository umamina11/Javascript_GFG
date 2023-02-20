// non-premitive datatype
// allow to save large number of data in  a singular memory data

// creating an array
let studentsName =["uma","jay","priya","riya","manas","riya","mike","muller","klara"];
console.log(studentsName);


// adding array inside an array

let numb=[1,2,3,4,["one","two","three","four"]];
console.log(numb);

// adding objects inside an array
let std=["ua","py","rs",1,2,3,["qw","er", "ty"],{pid:"11q2w1q"}];
console.log(std);


/// printing single name from string from the array studentsName 
// at index 0
console.log(studentsName[0]);

// at index 4

console.log(studentsName[4]);

// index not present in array

console.log(studentsName[10]);

// prinintg a range of index in array
// range 0-6
for(let i=0;i<6;i++){
    console.log(studentsName[i]);
}

// making the code more dynamic (change in the max index as new data is added to the array)

// to make it moer dyanmic we need to use the array lenth that will automically calucate the length of the arry and update the for loop 
 let arrlength = std.length;

 for(let i=0; i<arrlength;i++){
    console.log(std[i]);
 }


 