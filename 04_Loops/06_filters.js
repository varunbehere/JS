//filter function is used as filter on object 
//it also takes callback function as argument

// const myArray = [12,23,4,5,6,7,4,3,2,46,785,45,234,324,45,23]
// let filteredArray = myArray.filter((num)=>(num>20))
// console.log(filteredArray);

// let filArr= new Array;
// myArray.forEach(element => {
//     if (element>50) {
//         filArr.push(element)
//     }
// });
// console.log(filArr);

// const newArr = [312,312,3,12,345,36,4574,5634,52,23,42,34,2,53564574,532,34,252,6,5,4342,343,6896]
// let newFilArr = newArr.filter((num)=>{
//     return num>1000
// })
// console.log(newFilArr);

//filter chaining
//filter chaining is nothing but adding multiple filters
const newArray = [1,2,3,4,5,6,7,8,9,10]
let chainingFilteredArray = newArray
                .map((num)=>(num*10))
                .map((num)=>(num+5))
                .filter((num)=>(num>30))
                
console.log(chainingFilteredArray);