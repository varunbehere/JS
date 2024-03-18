/*
    Every type of variable / structure
    All of them have superior as object

    function   ---->
    array      ---->     Object    -> null
    string     ---->

    That is, any method injected in Object using prototype can be accessed by any of this (function,array,string)
    but not vice versa

    that is 

    object.prototype.method = function(){}  ---- can be used by strings,,,etc
    string.prototype.method = function(){}  ---- can not be by superior object
*/

/* For example if we want to find true length of any string it can be done by string.trim().length --- remove whitespace and and then will count string
    but if we want method for all strings then

*/

const string1 ='Helllo           '
const string2 = '                 Varun'
String.prototype.trueLength = function(){
    console.log(`String : ${this}\nTrue Length: ${this.trim().length}`)
}
// string1.trueLength()
// string2.trueLength()
// console.log(String.prototype)

const newObj= {
    username : 'Varun',
    age : 20
}
// console.log(Object.keys(newObj).length)

Object.prototype.print= function(){
    console.log(this)
}

Object.prototype.length = function(){
    console.log(`No. of keys in Object : ${Object.keys(this).length}`)
}
// newObj.length()  // now this method we can use on any object
// newObj.print()
// newObj.trueLength() // we cant use this method as it is into the String

// string1.print() // but here we can use its because the method was defined in the object's prototype

// TO inherit the method of any object(string,etc) we can use Prototypal Inheritance
// That is using __proto__ (Old Method also deprecated), setPrototypeOf() - new method / modern method 
console.log(Object.prototype)
// Object.setPrototypeOf(String)  // this isnt possible because Objects prototype can only be Object or null

const newObj1 = {
    fName : 'Varun',
    lName: 'Behere',
    age: 20
}
const newObj2 = {
    username: 'varunbehere',
    email:'varunbeher@gmail.com'
}
newObj2.__proto__=newObj1 
Object.setPrototypeOf(newObj2,newObj1)   //same as above but just has better syntax (whose proto to be set,from whom)
// console.log(newObj1.prototype)
console.log(newObj2.fName)