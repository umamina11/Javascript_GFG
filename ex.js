// print the character and the index of the string simultaneoulsy 

let text="I have been working for five hours straight";

for(let i=0; i<text.length;i++){
    console.log((i));
    console.log(text[i]);
}



// get the index of all letter "r"
for (let i=0; i<text.length;i++){
    console.log(text[i]);

    if(text[i]==="r"){
        console.log(i);
    }
}