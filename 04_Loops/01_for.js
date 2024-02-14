// for loops 
let rowdata = ''
for (let i = 0 ; i<5 ; i++){
    rowdata= '* '
    for (let j =0 ; j<i; j++){
        rowdata += '* '
    }   
    console.log(rowdata)
}

for (let index = 0; index < 50; index++) {
    if (index == 20){
        console.log("20 found");
        break
    }
    console.log(index)    
}
for (let index = 0; index < 50; index++) {
    if (index == 20){
        console.log("20 found");
        continue                    //this particular iteration will be skipped means it wont print 20 over here
    }
    console.log(index)    
}