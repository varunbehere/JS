/*
What is call()
call() helps call current context of the function in another function

call(this,arg...)
*/


function setUsername(username,name){
    this.username = username 
    this.name = name
    console.log('Called')
}
function createUser(username,name, email, password){
    //If we do it like this it will call the function and will also set the value nut to its current context whose execution context will also get removed
    // setUsername(username)           

    // So to set username to this functions context we will use call
    setUsername.call(this,username,name)

    this.email = email
    this.password = password
}
const user = new createUser('abc',"ABC",'abc@xyz.com','1234qwerty')
console.log(user)
