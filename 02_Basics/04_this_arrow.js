
//this  functions is responsible with that particular scope
const object = {
    first_name : "Varun",
    last_name : "Behere",
    welcome : function(){
        console.log(`Welcome ${this.first_name} ${this.last_name}`)
    }
}
object.welcome()
object.first_name = "Abc"
object.last_name = "Xyz"
object.welcome()

// arrow function
const arrowfun = ()=>{
    let username = "varunbehere"
    return username
}

console.log(arrowfun())


