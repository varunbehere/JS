console.log("Objects");

//declaration
// adding symbol in objects
// const mySym = Symbol("Key1")
// const myObj = {
//     [mySym]: "Key1",
//     name : "Varun",
//     "age" : 19,
//     city : "Pune"

// }
// console.log(myObj.name); //widely used way
// console.log(myObj["city"]);  //because keys are stored in the string format
// console.log(myObj) //while printing it will show the type of symbol as well
// console.log(myObj.name);
// myObj.name = "XYZ"
// console.log(myObj.name);
// Object.freeze(myObj)
// myObj.name= "ABC" // this value wont get updated as we have freezed the object
// console.log(myObj.name);

//using functions in object
// const Obj = {
//     newName : "Varun",
//     lastName : "Behere",
//     newAge : 20,
//     exploreCities : ["Pune","Mumbai","Hyderabad"],
//     fullName : function(){
//         console.log(this.newName +" " + this.lastName);
//     }
// }

// console.log(Obj);
// console.log(Obj.fullName());


//merging two or more objects
//can be done using either assign method or spread operator
// const obj1 = {
//     1 : "a",
//     2 : "b"
// }
// const obj2 = {
//     3 : "a",
//     4 : "b"
// }
// const obj3 = {
//     5 : "a",
//     6 : "b"
// }
// const obj4 = Object.assign({},obj1,obj2,obj3)// here the first argument is target that is other sources would get added to it
// console.log(obj4);

// const obj5 = Object.assign(obj1,obj2,obj3)// here the first argument is target that is other sources would get added to it
// console.log(obj5);
// console.log(obj1); // here we can see obj1 and obj5 are same as the target argument was obj1


// const obj6 = {...obj1,...obj2,...obj3} //using spread operator which can also be used with arrays   
// console.log(obj6);

// console.log(obj6.hasOwnProperty("3")); //checks if the passed parameter is a key of an object
// console.log(Object.keys(obj6)) // returns keys
// console.log(Object.values(obj6)); //returns values 

// destructuring objects
//so that we dont have to use objects again and again we directly store the value of that key in another varaiable
const obj = {
    name : "VArun",
    sirname : "Behere"
};
const {name : firstName} = obj

obj.name = "ABc"; // it wont get updated in the firstName as the value in the object is changing not the one we have stored it into
console.log(firstName);
