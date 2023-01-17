//1. print the number of characters in the given string 

const userName= "UMA MINA";

let count =0;
for(let i=0;i<userName.length; i++){
    count++;
}
console.log( "number of characters in string is "+  count);


//2.  print the number even and odd in a given range of number(1-100)
let reminder;
for (let i=0;i<=100;i++){
    reminder=i%2;
    if(reminder===0){
        console.log(`${i} is even number`);
    }else{
        console.log(`${i} is odd number`);
    }
}


//3. print the vowels in the given string 
const instring=" hello myself is uma mina ";
const vowels= "aeiou";

for (let i=0; i<instring.length;i++){
    if(vowels.includes(instring[i])){
        console.log(`${instring[i]} is a vowel`);
    }else{
        console.log(`${instring[i]} is not a vowel`);
    }
}

// 4. Identify all the even numbers from the given range of numbers 
let rem;
for(let i=1; i<=100;i++){
    rem=i%2;
    if(rem===0){
        console.log(`${i} is even number from the given range`);
    }
}

 

