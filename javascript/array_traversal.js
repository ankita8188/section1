const num =[5,9,6,3,7,2,]
for(let i=0;i<num.length;i++){
    console.log(num[i]**2)
    
}
for(let n of num){
    console.log(n**2)
}
console.log("...........................................")
//const num =[5,9,6,3,7,2]
for(let p of num){
    if(p%2==0){
        console.log(p)
    }
} 
num.forEach((n) => {
    if(n%2==0){
        console.log(n)
    }
});