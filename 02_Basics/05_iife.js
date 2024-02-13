//Immediatly invoked function expressions (IIFE)
//This are are invoked immediatly. Also can be used to reduce the global scope pollution

// What is global scope pollution ?
// There may exist many functions in the global scope of program and multiple variables may be present that may complicate program or pollute the program

//after every iife there must exist a semicolon or it throws an error

(function(num1,num2){
    num1+num2
})();

(function(name, last_name){
    console.log();
})();

//two types again 
//named iife
(function fun1(){
    console.log("Function 1 named iife");
})();
//unnamed iife 
((name)=>{
    console.log(` My name is ${name}...`) // parameterised iife
})('Varun');