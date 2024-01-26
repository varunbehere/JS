/*
    There are two types of datatypes:
    
    Primitive 
        This one are often called by value
        These are often passed to the non-primitive ones
        Uses Stack
        Example:
            String
            Number
            BigInt
            Undefined
            null
            Symbol
    
    Non-Primitive
        This ones are also known as call by reference
        Uses heap
        Example:
            Arrays
            Object
            Function

            */

let num = 23
let bigNum= 1234567890n
let str ="String"
let nullVal= null
let undefinedVal = undefined
let symVal = Symbol(123)

//dataype of null is returned as object in javascript even though it is null value

console.table([typeof num,typeof bigNum,typeof str,typeof nullVal,typeof undefinedVal,typeof symVal])


let obj = {
    name : 'Varun',
    city : 'Amalner',
    cont : 8485068303
}


let myFn = function(){
    console.log("Function")
}

let array = ["Hello",  "World", 33]
//Even arrays datatype is object

console.table([typeof obj,typeof myFn,typeof array])