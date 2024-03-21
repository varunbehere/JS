/*
Whenever we want to use encapsulation we can use getters and setters (but its usecase is not only encapsulation but in a way we can call it primary)
    - both get and set are used together
    - used for validation, manipulation
    - controlling access of the property

    - Only get() method returns
    - Set() doesnt need to return explicitly
*/

//New way
class User{
    constructor (email,passwd){
        this.email = email
        this.passwd = passwd
    }
    /*
    In get and set method we have used different names to property
        - Its because constructor also tries to update it everytime along with get and set methods that causes stack full issue
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
// console.log(`Password : ${user1.passwd}`)



// Second way -- using define property
function ConFunction(email, passwd){
    this.email = email;
    this._passwd = passwd;

    Object.defineProperty(this, 'passwd', {
        get: function(){
            return this._passwd.split('').map(() => '#').join('');
        },
        set: function(value){           //facing some issue with setter
            this._passwd = value.split('').map((char, index) => {
                if (index % 2 === 1) {
                    return '@'; 
                } else {
                    return char;
                }
            }).join('');
        }
    });
}
const conFunctionObj = new ConFunction('abc@xyz.com', 'qwerty@123456');
console.log(conFunctionObj.passwd); // Output I am getting instead of #@#@#@#: #######


// Third way
const UsingObject = {
    _email: 'abc@xyz.com',
    _passwd : 'abc',

    get email(){
        return this._email.toUpperCase()
    },
    set email(val) {
        this._email =val
    }
}
const usingObject = Object.create(UsingObject)
console.log(usingObject.email)