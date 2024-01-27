console.log("Arrays in JS");

//defination of an array
// const arr1= new Array(0,1,2,3,4,5,6,7,8)
// const arr2= [0,1,2,3,4,5,6,7,8,9]
// console.log(arr1);
// console.log(arr2);
//if the output is int the indented format it is not something different in js 
//its just the environment thats displaying output in this way

//array methods

// const myarr= new Array(0,1,2,3,4,5,6,7,8,9)

// console.log(myarr.indexOf(0)) ///rerturns index

// //addding elemtnt at the end
// myarr.push(11)
// myarr.push(12)
// console.log(myarr)

// //removing element from the end 
// myarr.pop()
// myarr.pop()
// console.log(myarr)

// //removes the first element 
// myarr.shift()
// console.log(myarr)

// //adds the first element 
// myarr.unshift(14)
// console.log(myarr)

//doesnt affect any referred array
// const myarr= [1,2,3,4,5,6,7,8,9,10]
// const newarr1 = myarr.slice(1,3)
// console.log(myarr)
// console.log(newarr1);


//splice splits the array given as well
const myarr= [1,2,3,4,5,6,7,8,9,10]
const newarr1 = myarr.splice(0,4)
console.log(myarr)
console.log(newarr1);







