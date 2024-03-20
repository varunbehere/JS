/*
getOwnPropertyDescriptor()
 - This method allows gives the status of the objects properties that are not present in prototype toolchain
 - Particulary the properties are - writable, enumerable, configurable
 
 -Proper Syntax - getOwnPropertyDescriptor(object,key)

*/

// console.log(Math.PI)
// Math.PI = 20
// console.log(Math.PI)  // It wont have changes as it has been set to non writable
// let piproperty = Object.getOwnPropertyDescriptor(Math,'PI') // That we can see here
// console.log(piproperty) 
 

/*
TO modify it we use
    
  -- Object.defineProperty
  -- Object.defineProperties

*/


//for an example
const obj = {
    name:'varun',
    age:20,
    email:'varunbehere@gmail.com'
}
console.log(Object.getOwnPropertyDescriptor(obj,'name'))
console.log(Object.getOwnPropertyDescriptor(obj,'age'))
console.log(Object.getOwnPropertyDescriptor(obj,'email'))
console.log(obj)
obj.name = 'abc'
console.log(obj)
for (const [key,value] of Object.entries(obj)) {
    console.log(`${key} : ${value}`)
}
console.log('-----------------')
obj.name = 'Varun'
// and when I change properties

Object.defineProperty(obj,'name',{
    writable : false,
    // enumerable : false 
})


console.log(`Name Prop${JSON.stringify(Object.getOwnPropertyDescriptor(obj,'name'))}`)
console.log(`age Prop${JSON.stringify(Object.getOwnPropertyDescriptor(obj,'age'))}`)
console.log(`Email Prop${JSON.stringify(Object.getOwnPropertyDescriptor(obj,'email'))}`)
console.log(`Current Object :${JSON.stringify(obj)}`)
obj.name = 'abc'                // this wont get updated as its writable is set to false
console.log(`After Changes : ${JSON.stringify(obj)}`)       // in this it wont get updated

Object.defineProperties(obj,{
    email:{
        writable:false,
    },
    age:{
        writable : false,
        enumerable : false
    }
})


//this loop wont work as its enumerable is set to false except it will just print email as its enumerable hasnt been affected
for (const [key,value] of Object.entries(obj)) {
    console.log(`${key} : ${value}`)
}
