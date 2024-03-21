/*
Whenever we want to use encapsulation we can use getters and setters (but its usecase is not only encapsulation but in a way we can call it primary)
    - both get and set are used together
    - used for validation, manipulation
    - controlling access of the property
*/

//New way
class User{
    constructor (email,passwd){
        this.email = email
        this.passwd = passwd
    }
    /*
    In get and set method we have 
    
    
    */

    get passwd (){
        return this._passwd = this._passwd          // Underscore (_) in js is convention for private property there is no such rule that pivate property shall have underscore but developers use this method
    }
    set passwd(val){
        this._passwd =val.split('').map((char,index)=>{
            if (index % 2 == 0) {
                return '@'
            }
            else{
                return '#'
            }
        }).join('')
    }
    // After masking passwd we cant see what value was given through object cause getters and setters are used for this purpose only
    // And if we want to still retain that value we have to store in different value/object
}
const user1 = new User('abc@xyz.com','qwerty@12345')
console.log(`Password : ${user1.passwd}`)



// Second way -- using define property

const newObj = {
    name : ''
}