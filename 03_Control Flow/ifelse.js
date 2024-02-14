const name = "Varun"
if (name =="Varun"){
    console.log(`${name} Welcome`)
}
else{
    console.log("Incorrect Name");
}

//to check if an object is empty
const emptyObj = {}
if (Object.keys(emptyObj).length===0) {
    console.log("Empty Object");
}

//nullish coalescing operator (??): works on (null, undefined)
//this oeprator returns right hand side vlaues when left side values are null
//inshort it doesnt prints the null values

let val1,val2,val3;
val1 = null ??12
val2 = 15 ?? null;
val3 = null??50 ??40; // in the the one that comes first comes

console.log(val1);
console.log(val2);
console.log(val3);

//ternary operator
//these are conditional operators 
//that is we can directly perform the conditional statements 
const price = 10
price > 100 ? console.log("Price is higher") : console.log("In budget");
 


// switch case 
const month = "Feb"
switch(month){
    case "Jan" : console.log("Jan"); break;
    case "Feb" : console.log("Feb"); break;
    case "Mar" : console.log("Mar"); break;
    case "Apr" : console.log("Apr"); break;
    case "May" : console.log("May"); break;
    case "Jun" : console.log("Jun"); break;
    case "Jul" : console.log("Jul"); break;
    case "Aug" : console.log("Aug"); break;
    case "Sep" : console.log("Sep"); break;
    default : console.log("Not Found");
}