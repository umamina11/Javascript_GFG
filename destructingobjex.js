// Destructuring the objects example
// 


const employee={
    engineer: {
        en1: {
            id: 1,
            name: "umamina",
            occupation: "front-end developer"
        },
        en2: {
            
            id: 2,
            name: "mahima",
            occupation: "back-end developer"
        },
    },
    placement: {
        en3: {
            id: 3,
            name: "nik samuel",
            occupation: "Sr.executive"
        }
    },
    youtube: {
        en4: {
            id: 4,
            name: "kriti",
            occupation: "content creator "
        },
    }
}

let {engineer:{en2}}=employee;
console.log(en2);

//another way 
let {youtube}=employee;
console.log(youtube);