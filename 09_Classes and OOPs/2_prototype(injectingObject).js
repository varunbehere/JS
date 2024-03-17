// In the code given below we are creating an object with property
// for constructor function we are creating user defined property/method
// and thus using new keyword we are creating new instance of constructor function or an Object which is referring to function ConFunction

function ConFunction(username,age,salary){
    this.username = username
    this.age = age
    this.salary = salary

}
ConFunction.prototype.salaryIncrement = function(){
    return this.salary+10000
}
ConFunction.prototype.print = function (){
    console.log(`\nusername : ${this.username} \nPrevious Salary = ${this.salary}\nIncremented Salary : ${this.salaryIncrement()}`);
}
// here we are using user defined property/ method injected in prototype in another user defined method/property

console.log(ConFunction.prototype) // this will print new User injected properties in prototype

const var1 = new ConFunction('Varunbehere','20',90000)
const var2 = new ConFunction('behereVarun','21',100000)

var1.print()
var2.print()

/*
New Keyword:

What happens when new keyword is used?

A new object is created: The new keyword initiates the creation of a new JavaScript object.
A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.
The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.
The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
  