// Fetch works on top of everything - that is it creates a special queue - priority queue / microtask queue
// Operates in two modes 1)WebBrowser / Native Node 2)For reserving memory space  a)onFulfilled() b)onRejection()
// Only network errors means rejection to fetch, Even HTTP error such as 404 also fullfill that is this will go to 
// on fullfilled()


// fetch (url, options)
// options may contain - mode(GET,POST,..), credentials, etc...

async function fetchU (){
    try {
        const data = await fetch('https://api.github.com/users')
        const response  = await data.json()    // we have used await over here bcoz it needs time for parsing
        // console.log(data);// this is normal data as recieved from api
        console.log(response) // data in the json format
    } catch (error) {
        console.error(error.message)
    }
}
fetchU()

// or above task can be performed in other way

fetch('https://api.github.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch(function(error){
    console.log(error)
})
.finally(function(){
    console.log('Finally executed')
})