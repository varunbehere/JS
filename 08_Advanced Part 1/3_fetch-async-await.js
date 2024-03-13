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