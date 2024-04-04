const openRequest = window.indexedDB.open('test',1.0)

openRequest.onsuccess = function (event){
    let db = event.target.result
    console.log(db);
}