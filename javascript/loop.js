n=5
for(let i=1;i<=10;i++)
    console.log(n+"*"+i+" = "+n*i)

console.log("-------------------------------------")

for(let i=1;i<=10;i++)
    console.log(`${n} * ${i} = ${n*i}`)

fruits=[12,13,1,512,13]
for(let j=0;j<fruits.length;j++)
    console.log(fruits[j])

dict={
    Name:"ankita",
    branch:"csd"
}
for(let key in dict)
    console.log(key + " = " + dict[key])

for(let k of fruits)
    console.log(k)
console.log("-----------------------------------")
for(let a=10;a<=50;a++){
    if(a%7==0){
        console.log(a)
    }
}
console.log("----------------------------------------")
let i=19
do{
    console.log(i)
    i++
}while(i>20)    
console.log('1'==1)
console.log('1'===1)
console.log('2'!==2)
