let str = new String("Varun")// way to declare string
const str1= "Behere" // way of declaring string

// console.log("${str}") //prints string as it is in commas 
// console.log('${str}') //prints string as it is in commas

console.log(`${str}`) //use of backticks to directly use variables to print values
console.log(str1)

//string methods
console.log(`${str.length}`)
console.log(`${str.charAt(0)}`)
console.log(`${str.substring(0,3)}`)
console.log(`${str.slice(-4,-1)}`)

const newStr = "    Varun    "
console.log(newStr) //prints with the whitespaces
console.log(newStr.trim()); //prints without whitespaces ~removes whitespaces

console.log(newStr.replace('Varun', 'Behere'))