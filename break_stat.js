/** itertaing string  */
//break statement 

let message=" I am a Btech Graduate from banasthali Vidyapith";

for (let char of message){
    if(char==="u"){
        break;                   // break the loop then and there                            
    }
    else{
        console.log(char);
    }
}

// count 

let text="hello i am uma mina.";
let count=0;
for (let char of text){
    if (char==="a"){
        count ++;                          // give the number of times event occured
        
    }
   
}
console.log(count);



/// print characters at index values 6,4,2,7,0

console.log(message[6]);
console.log(message[4]);
console.log(message[2]);
console.log(message[7]);
console.log(message[0]);



// using for loop

for(let i=0; i<message.length-1; i++){
    console.log(message[i]);
}