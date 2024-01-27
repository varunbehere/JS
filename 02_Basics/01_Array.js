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
// const myarr= [1,2,3,4,5,6,7,8,9,10]
// const newarr1 = myarr.splice(0,4)
// console.log(myarr)
// console.log(newarr1);


//ADVANCED ARRAY
// combining two arrays
// const arr= ["abc","xyz","pqr"]
// const arr1= ["lmn","stv","ded"]
// const arr2= [arr,arr1]
// console.log(arr2); // we can see array can also take arrays as the data

// // if we want to merge convert the nested array's elements in the array(parent) 
// // then we can use concat()method or spread operator(...)

// // concat method can only combine two arrays
// const concatArr= arr.concat(arr1)
// console.log(concatArr) 

// //use of spread opertor is considered more efficient as it can have multiple arguments
// const spredArray = [...arr,...arr1,...concatArr]
// console.log(spredArray);

// converting array unnder array or nested arrays can be made flat using flat method
// const arr2= [[1,2,3,4,5],[6,7,[8,9,0,10,12]]]
// const flattened_array=arr2.flat(Infinity)
// console.log(arr2);
// console.log(flattened_array)

// const val1=2344
// const val2=3344
// const val3=4344
// let arr = Array.of(val1,val2,val3) //creates array
// console.log(arr);

const arr1= Array.from("Varun") // creates array of every character
console.log(arr1);

