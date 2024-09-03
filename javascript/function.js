function add(a,b){
     var c=a+b;
    console.log(c);
}

add(10,35)
// console.log(c);

console.log("-----------------------------------------")
const getavg = function(m1,m2,m3){
    const avg =(m1+m2+m3)/3;
    console.log(avg);
    return avg;
}
const v=getavg(34,56,78)
console.log("avg:",v)
console.log("----------------------------------")
const fact= (n) =>{
    let f =1;
    for (let i=1; i<=n; i++){
        f*=i
    }
    return f
}
let ans=fact(6)
console.log(ans)
console.log("----------------------------")
// let c = prompt("enter the number")
let s=10
prime=true
for (let i=2;i<s;i++){
    if(s%i ===0){
        console.log(" not prime")
        prime =false
        break;
    }
    if(prime){
        console.log("prime")
    }
}