//1
// output of the snippets

let text="hello world, welcome to the universe";
let result=text.includes("world");
console.log(result);

//2
const GFG=["geeks","for","geeks"];
GFG.pop();
console.log(GFG.length);

//3
let temp=["Geeks","For","Geeks"]
for(let i=0;i<temp;i++){
    if(temp[i]=="Geeks"){
        console.log(i);
    }
}

//4
const arr=[1,2,3,4,5];
console.log(...arr);

//5

const firstName='Rishi'
lastName='Raj'

console.log('hello ${firstName},nice to meet you');

//6

const str1='Geeksfor'
const str2='Geeks'
const str3=str1.concat(str2);
console.log(str3);

//7

const str11='GeeksforGeeks';
const str12=str11.slice(2,5);
console.log(str12);