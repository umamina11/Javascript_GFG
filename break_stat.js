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