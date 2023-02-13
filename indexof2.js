// finidng the character in the given string using the indexOf method 

function findchar(text, char){
    const index = text.indexOf(char)
    if(index ===-1){
        return "Character not found in the list.";

    }else{
        return "character is there in the list";
    }
}

const result = findchar("i have been working here for more than a year","z");
console.log("z " + result);

const results = findchar("i have been working here for more than a year","w");
console.log("w " + results);



///Wriet teh whole code using the arrow function
const findcharacter=(text,char)=>text.indexOf(char)===-1 ? "Character not found in the list":"Character found";

const res=findcharacter("i planned each and every thing", "i");
console.log("i " + res);