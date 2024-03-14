const obj1 = {
    userName: 'varunbehere',
    name: 'varunbehere',
    age : 20,
    loggedIn : true,
    totalLogin : 5
}
function userStats(userName, age, totalLogin){
    // this keyword here denotes to the current instance 
    this.userName = userName     //on the left side, a declared variable is there and on right side we are referring to the parameter
    this.age = age
    this.totalLogin = totalLogin

    return this    // we are returning the current instance
}

const var1 = new userStats('Varun', 19, 6)   // this new keyword overhere creates the new instance of   
const var2 = new userStats('Behere',20, 10)

console.log(var1);
console.log(var2)