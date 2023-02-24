// checking the output of the given code snippets
//1
let data= 7;
while (data>=0)
{
    if(data<=5){
        data--;
        continue;
    }
    console.log(data);
    data--;
}

//2
for (let i=1;;i++){
    let data1=i*5;
    console.log(data1);
    if(data1>=30)
    break;
}

// 3
const str = "GeeksForGeeks";
for(let i=0;i<str.length;i++){
    console.log(str[i]);
}

//4
let sum = 0;
const n = 100

for(let i=1;i<=n;i++){
    sum +=i;
}
console.log('sum: ', sum );

//5
<script>
function foo(bar){
    bar=bar ??55;
    document.write(bar);
    document.write("</br>");
}
foo();
foo(22);
</script>