//for-in loop can be used on objects


const myObj = {
    'firstName' : 'Varun',
    'lastName' : 'Behere',
    'rollNo' : 46,
    'panel' : 'B'
}

for (const key in myObj) {
    console.log(`${key} : ${myObj[key]}`);
}//this would iterate through the loop

