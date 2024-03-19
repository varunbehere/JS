/*
static
Static properties and methods are those that you dont want to change across the operation or for any instance it can only be used using Class object
no instance and derived classes can access the Class's static methods and props

this are used for configuration, utilities, etc..

*/
class Human {
    constructor (gender,age){
        this.gender = gender 
        this.age = age
    }
    static species = 'Homosapiens'      //static prop
    static gender (){                   //static method
           // 
       return `Into static method`
    }
}

class Male extends Human {
    constructor(name,age){
        super(age)
        this.name = name 
        
    }

    child(){
        if(this.age <= 18){
            return `${this.name} is a child`
        }
        else{
            return `Not a child`
        }
    }

}

const user = new Male ('ABc','20')
const cuser = new Human ('M',20)


console.log(user.child())
// console.log(cuser.species) // this wint be printed as it is defined with static
// console.log(cuser.gender()) // this wont be printed as it is defined with static
console.log(Human.species)
console.log(Human.gender())