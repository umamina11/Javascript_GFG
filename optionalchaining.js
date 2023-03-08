// optional chaining 
// what of the admin wants the infromation or property that is not present in the object then how to 
// deal with such situation 
// there are two ways forst is using the conditional statements and the another one is the 
// optional chainin =g


const user={
    name: "uma ",
    age: 22,
    address:{
        city:"jaipur",
        state: "rajasthan"
    },
    hobby: "reading books",
    getDisplayeMessage: function(){
        console.log("welcome Uma ");
    }
}
// 1st method
console.log(user.address.city);

console.log(user.address.street); //  this will gives output as undefined 

//console.log(user.education.secondary);  // this will give u an error that undenfied property not find
// to deal such situation we use 
// this condition 

if(user.education!== undefined){
    console.log(user.education.secondary);
}else{
    console.log("education background not found");
}

// 2nd method
// optional chaining

console.log(user.eduation);     // this will give u output as undefined

console.log(user.education?.seconday);   // it will check for educaiton proeprty and if not persent then it will give u undefiend without going for the secondary property


//calling the function property

user.getDisplayeMessage();
// what if fucntion is not there 
//user.getDisplayAddress();    // give u an error that funtion is not present 
// to deal this error
user.getDisplayAddress?.(); // this will give u undefined 