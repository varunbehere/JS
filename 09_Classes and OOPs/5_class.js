/*
JS isnt completetly OOP based language, the OOP syntax is just syntactical sugar on the js
whereas it uses same operation as prototypal inheritance
*/


// class User {
//     constructor (username, email, password){
//         this.username = username 
//         this.email = email
//         this.password = password
//     }
//     encryptPassword(){
//         this.password =this.password.split('').map(i=>{
//             if (i === i.toUpperCase()){
//                 return i.toLowerCase()
//             }
//             else{
//                 return i.toUpperCase()
//             }
//         }).join('')

//         return this.password
//     }
// }
// const user1 = new User('abc','abc@xyz.com','AbceFd')
// console.log(user1.encryptPassword());


// Behind the scenes of how above operation performs

function User (username,email,password){
    this.username = username
    this.email = email
    this.password = password
}
User.prototype.encryptPassword= function(){
    this.password = this.password.split('').map(i => {
        if (i === i.toUpperCase()){
            return i.toLowerCase()
        }
        else{
            return i.toUpperCase()
        }
    }).join('')
    return this.password
}
const newUser = new User('varunbehere','varunbehere@gmail.com','sdasADdsA')
console.log(newUser.encryptPassword())