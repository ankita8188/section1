const nums=[2,3,4,5,6,7];
const cubes=[];
nums.forEach((n)=>{cubes.push(n**3)});
console.log(cubes);
const even=[]
nums.forEach((n)=>{
    if(n%2==0){
        even.push(n)}
    });
    console.log(even)
    console.log("*******************************************")
    //map function
    const newarr=nums.map((n)=>{return n**3});
    console.log(newarr);
    const prices=[230,4500,6799,2730,8880,990];
    const p=prices.map((n)=>{ return n+n*0.18});
    console.log("gst: "+p)
    console.log("---------------------------------------")
    const prices2 =['₹450.45',"₹230.85","₹8956.23"]
    let r=prices2.map((n)=>{return parseInt(n.slice(1))});
    console.log(r)
    //filter function
    const num2=nums.filter((n)=>{return n%2==0
    });
    console.log(num2);
    console.log(".............................................")
    const names=['ankita','vishesh','qaima','khushi']
    let f= names.filter((n)=>{ return 6<=n.length});
    console.log(f)

    console.log("_---------------perfect number-----------------------------")
    const h=[4,9,16,18,36];
    let k= h.filter((n)=>{return Number.isInteger(n**0.5)});
    console.log(k)
    console.log("---------a is presnt in string-----------------")
    const names2=['ankita','vishesh','qaima','khushi']
    let fg= names2.filter((n)=>{ return n.includes("a")});
    console.log(fg)
    


