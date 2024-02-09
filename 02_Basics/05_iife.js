//Immediatly invoked function expressions (IIFE)
//This are are invoked immediatly. Also can be used to reduce the global scope pollution

// What is global scope pollution ?
// There may exist many functions in the global scope of program and multiple variables may be present that may complicate program or pollute the program


(function(num1,num2){
    num1+num2
})()

(function(name, last_name){
    console.log();
})()