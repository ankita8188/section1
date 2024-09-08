console.log("==========================")
//remove last 3 fruits from the array
const arr=["apple","banana","papaya","orange"]
arr.splice(-3,3)
console.log(arr)

// string convert into upper case

//let r= a.map((b)=> { return b.toUppercase()});
//console.log(r)
// remove string does not contain a 

 //console.log(b)
    
// insert mango and peech after apple 
const userarray =[
    
        {name:'ankita',age:18, email:"ankita@mail.com"},
        {name:'khushi',age:11, email:"khushi@mail.com"},
        {name:'qaima',age:42, email:"qaima@mail.com"},
        {name:'priya',age:20, email:"priya@mail.com"}
];
const obj= userarray[0];
const updateduser = userarray.map((user)=>{
    user.email.replace('mail','gmail');
    return user;
});
//updated email of every user to gmail.com
//filter all user with age less than 30
// sort the user by name and age
console.log(updateduser);
const obj2={...obj,email: obj.email.replace('mail','gmail')};
console.log(obj2);
const updateduser2=userarray.map((user)=>{
    return {...user,email:user.email.replace('mail','gmail') }
});
console.log(updateduser2)
const num=[1,5,,6,2,3]
console.log(0,...num,5,6)

