/** property existences
 * 
 */

const obj={
    name: "umamina",
    city: "jaipur"

}

const isPropertyFound= "name" in obj;

console.log(isPropertyFound);

const isPropertyFound1= "age" in obj;
console.log(isPropertyFound1);


// using loop 
// get the item(properties) lists in object
for(let item in obj){
    console.log(item);
    
}


for(let key in obj){
    console.log(key,obj[key]);
    
}


