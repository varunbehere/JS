console.log("Functions Demo");

// //declaration or defination
// function funName (){                            //noparameter
//     console.log("Function without Parameter")
// }
// funName()                                       //calling a function
// function paraFunc (name){                       //function with parameter
//     console.log("Name:",name)
// }
// paraFunc("Varun")                               //calling a function


// //example
// function add(num1,num2){
//     return num1+num2
// }
// const result = add(2,5)                          //storing value returned by function in variable
// console.log(result);


// multiple arguments 
// function fun (val1){
//     return val1
// }
// console.log(fun(500,4000,6013,1613));               //values except the first one wont get printedas we have only one parameter

//to gather multiple arguments when there are limited parameters we use rest operator 
//rest operator and spread operator are same their name changes based on their usecases

// function function1 (...val1){
//     return val1
// }
// console.log(function1(500,4000,6013,1613));         //now all the arguments will get printed

//similarly
// function function2(num1, num2,...num3){
//     return num3
// }
// console.log(function2(2121,32,21,54,232,15,132,132));

//function with arrays
// const array =[323,423,423423,42,233]
// function fun (getArray){
//     return getArray[4]
// }
// console.log(fun(array))

// functions with object
const obj = {
    username: "varunbehere",
    name :"Varun"
}
// const {name : firstName} = obj
// console.log(firstName)
function funObj (obj1){
    if(obj1.name!=""){
        return `${obj1.username} is his username and ${obj1.name} is his name`
    }
}
console.log(funObj(obj));