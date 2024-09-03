const myarray=[23,"good",true,console.log];
console.log(myarray);
console.log(typeof(myarray))
console.log(Array.isArray(myarray));
console.log(myarray.length);
const movies =['bad news','stree-2','avengers','kill','predestination']
//indexing

console.log(movies[2]);
console.log(movies[4]);
console.log(movies.at[-2] );
console.log(movies.at[1] );
movies[4]='deadpool'
console.log(movies)
//slicing
console.log(movies.slice(-2));
//adding and removing element
movies.push('the prestige')
movies.unshift('the dark knight')
console.log(movies)
movies.pop();//end remove
movies.shift();// begining remove
console.log(movies)
movies.splice(2,2,'kalki','omg','spiderman')
movies.splice(2,0,'kalki','omg','spiderman')
// from index 2 and how many elements delete and replace on that place
// from index 2 and how many elements delete and replace on that place
console.log(movies)

