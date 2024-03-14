const obj1 = {
    userName: 'varunbehere',
    name: 'varunbehere',
    age : 20,
    loggedIn : true,
    totalLogin : 5
}


// Given Below is an Example of constructor in JS
// Constructor - It is a special function that creates new instance of instance or an object
// Constructor is called when it is used with the new keyword
// Usually constructor is named with first letter as capital. It is not compulsion but most of the codebases have such naming convention.


function UserStats(userName, age, totalLogin){
    // this keyword here denotes to the current instance 
    this.userName = userName     //on the left side, a declared variable is there and on right side we are referring to the parameter
    this.age = age
    this.totalLogin = totalLogin

    return this    // we are returning the current instance
}

const var1 = new userStats('Varun', 19, 6)   // this new keyword overhere creates the new instance of  userStats() function 
const var2 = new userStats('Behere',20, 10)

// If we dont use the new keyword in the above operations the values will get updated and we cant access the values in var1

console.log(var1);
console.log(var2)