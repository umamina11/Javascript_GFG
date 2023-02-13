// check wherther the charater present in string or not the difference between the 
//indexOf method and the include is that include returns the boolean values

const message="i have to study to get into good collage";

console.log(message.includes("good"));
console.log(message.includes("is"));


// if we apply condtion 

const diaply=" I like to code in dark room";
if(diaply.includes("dark")){
    console.log("then you will get every application in night mode");
}else{
    console.log("then that person keep every application in light mode");

}

// check string has vowels or not

const display=" I have so much work to do";



const vowels = "aeiouAEIOU";
 for(let char of display){

    if(vowels.includes(char)){
        console.log(char + " vowels in the string")
    }else{
        console.log(char + " string does not have any vowels");   // but as the  it will run the for loop at each iteration and that will give us a messy 
    }

 }


 // to make the code more readable and simple for the readers 

 const messages="I love coding in dark setups.";
 const vowel="aeiouAEIOU";

 let flag=fasle;

 for (let char of messages) {
if (vowel.includes(char)){
    flag= true;
    break;
}else{
    flag= false;
}

}
if(flag=== true){
    console.log("string has vowels");

}else{
    console.log("string doesn't have vowels");
}

