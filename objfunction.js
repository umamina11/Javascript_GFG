// fuction as object property
// in obejct we can use anything fro value but string as a key
// using fucntion as property
const obj={
    name: "Uma Mina",
    message: function(){                        // by creating a key 
        console.log("hello world.");    // assiging an anonomus function
    },
Bye(){                                         // without creating key 
    console.log("time to say byeee");
}
}
console.log(obj.message);
console.log(obj);
obj.message();                // calling the anonumns function


obj.Bye();