console.log("Number Methods");

const num= 234205

console.log(num);
console.log(num.toString() +" " + typeof num.toString());
console.log(Math.pow(num,2));
console.log(Math.sqrt(num)); // returns square root of the specified number
console.log(Math.sqrt(num).toFixed(1) + typeof Math.sqrt(num).toFixed(1)); // returns the number with fixed no of decimal in the form of string
console.log(Math.sqrt(num).toPrecision(6) + typeof Math.sqrt(num).toPrecision(6)); // returns the number in the specified length as string

console.log(parseFloat("32342.2313"))
console.log(parseInt("32342.2313"))

console.log(Math.floor((Math.random())*10))
