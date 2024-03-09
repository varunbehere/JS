// Below code is an example of promise and its execution methods 
// we have created a promise and have added two setTimeout functions
// one after one second which calls resolve method and one after two seconds that rejects the prommise

// we have created chain of then and catch
// only then will get executed as the promise getting resolved after one second and after two seconds the same
// promise is to be rejected which isnt possible as the promise is already been resolved
// const promiseOne = new Promise(function(resolve,reject){
//     console.log('into the promise');
//     setTimeout(function(){
//         resolve()                //this method is called using then() method, when resolve method successfully executes then and only then the then()method executes called                   
//     },1000)
//     setTimeout(()=>{
//         reject()
//     },2000)
// })
// promiseOne.then(()=>{
//     console.log('Resolve Called')
// })
// .catch(()=>{
//     console.log('Reject method Called')
// })



//Promise 2
//Here we are not storing promise in any variable but instead we are directly having its object
// new Promise (function (resolve,reject){
//     console.log('Promise 2')
//     setTimeout(()=>{
//         resolve()
//     },1000)
// })
// .then(function(){
//     console.log('Promise 2 Resolved')
// })


//Promise 3
// new Promise(function(resolve,reject){
//     const flag = false 
//     if (!flag){
//         resolve({userName:'Varun', JobTitle:'Developer '})   
//     }else{
//         reject()
//     }
// })
// .then(function(user){
//     console.log('Resolved ')
//     console.log(user.username);
//     return user                  
// })
// .then((name)=>{                            //this then() has the argument returned by the previous then().  
//     console.log(name); 
// })
// .catch(function(){
//     console.log('Rejected');
// })


//Promise 4
let promiseFour = new Promise (function (resolve,reject){
    const trigger = false
    if (!trigger){
        reject('ERROR : Something Went Wrong')
    }else{
        resolve({userName : 'Varun', email: 'varunbehere@gmail.com'})
    }
})
promiseFour.then((user)=>{
    console.log(user);
})
.catch(function(error){
    console.log(error);
})
