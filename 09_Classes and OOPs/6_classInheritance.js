//Example of Inheritance

class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        return `${this.username} Logged In !`
    }
}
class Teacher extends User{
    constructor(username,email,pass){
        super(username)
        // this.username = username
        this.email = email
        this.pass = pass
    }
    record(){
        return `${this.username} modeified the record`
    }
}

const teacher1 = new Teacher('varunbehere','varun@abc.com','qwerty')
console.log(teacher1.logMe())
console.log(teacher1.record());

const newUser = new User('abc')
console.log(newUser.logMe())
// console.log(newUser.record());      // this isnt possible its not the method of the class
console.log(newUser instanceof Teacher); // checking if its the instance of that class