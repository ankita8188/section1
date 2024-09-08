//key value pair (object)
const user ={
    name:"raju",
    email: 'rajy@gmail.com',
    password:'12856'
};
console.log(user);
console.log(user.name);
console.log(user['email'])
user.password='xyz'
console.log(user)
user.address = 'lucknow'
console.log(user)
user.address = {
    city:'lucknow',
    state:"up",
    pin:'226003'
}
console.log(user);
console.log(user.address.city)
user.post=['post1','post2'];
console.log(user)
console.log(user.post[0])
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
const smartphone={
    brand:"samsung",
    model:'s24 ultra',
    price:"99999",
    colors:['black','blue','white']
};
console.log(smartphone.colors[1]);
smartphone.colors.push("pink");
console.log(smartphone)
smartphone.colors.splice(0,1,"grey")
console.log(smartphone)
const {email,password }=user
console.log(email)
console.log(password)
const arr=[5,2,6,8,6]
const[a, , ,d]=arr;
console.log(a)
//let [p, y, z] = [2,5,8]
//[y,z]=[z,y]
//console.log(y,z)
const smartphonearray=[
{
    brand:"samsung",
    model:'s24 ultra',
    price:99999,
    colors:['black','blue','white']
},
{
    brand:"google",
    model:'s24 ultra',
    price:60099,
    colors:['black','blue','white']
},
{
    brand:"raelme",
    model:'s24 ultra',
    price:97899,
    colors:['black','blue','white']
},
{
    brand:"oopo",
    model:'s24 ultra',
    price:4599979,
    colors:['black','blue','white']
},
{
    brand:"iphone",
    model:'s28 ultra',
    price:54978999,
    colors:['black','blue','white']
}
];
console.log(smartphonearray[3].price)
console.log(smartphonearray[1].colors[1]);
const budget = smartphonearray.filter((phone) => { return phone.price>50000});
console.log(budget)
const smart=smartphonearray.filter( (sm) => {return sm.brand==='sumsung'});
console.log(smart)
const brands=smartphonearray.map((phone)=>{ return phone.brand});
console.log(brands)
console.log( new Set(brands))
console.log(Array.from( new Set(brands)))
const abs =smartphonearray.map((ab)=>{ return ab.brand+" "+ ''+ab.model + ''+ ab.price} );
console.log(abs)
const abss =smartphonearray.map((ab)=>{ return  `${ab.brand} ${ab.model} -${ab.price} `});
console.log(abss)
