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
