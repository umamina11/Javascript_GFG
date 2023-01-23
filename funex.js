// sum of all numbers from 0-20
function CalculateSum(min, max){
    let total=0;
    for (let i=min;i<=max;i++){
        total = total+i;
        
    }
    console.log(total);
}

const result=CalculateSum(1,20);
