//charAt is used to get the particular array at the given index position

const Message="We will get back to you soon.";
const index = 8;
const char= (Message.charAt(index));  // if we donot provide the value of the index then by default it will provide the first index value that is at 0 index


console.log(char);

// if the given index is above the inedx of the message then it will provide empty result instead of giving the result 
const chare= (Message.charAt(index-5));
console.log(chare); 




// printing the asiic code 
// where the index is given as 8 
const asiiccode=(Message.charCodeAt(index));
console.log("The ASsic code of the index value 8 is"+ asiiccode);