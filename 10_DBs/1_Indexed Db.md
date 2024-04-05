# Indexed-DB
- **Indexed DB** is far more better option than ```localstorage```.<br/>
- Client Side Storage Platform.<br/>
- The reasons are :
    1. It supports ```indexing```.
    2. Supports more storage (2GB) which in local storage is 2MB ~ 10 MB. (apporx)
    3. More File Support for (images, file, etc.)

- It is used for Local Apps usually.

## How to perform 

This is how we define the openrequestwith the name for an databse and its version :
<br>
The parameters are: 
- name – a string, the database name.
- version – a positive integer version, by default 1 (explained below). It is used to manage the schema.


```javascript 
const openRequest = window.indexedDB.open('test', 1);
```
The call returns openRequest object, we should listen to events on it:
- success: database is ready, there’s the “database object” in openRequest.result, we should use it for further calls.
- error: opening failed.
- upgradeneeded: database is ready, but its version is outdated (see below). This is usually where we define the schema of the db.
<br/><br/>
```javascript
openRequest.onupgradeneeded = function(event) {
    let db = event.target.result;
    let objectStore = db.createObjectStore('MyObjectStore', { keyPath: 'id' }); 
    objectStore.createIndex('nameIndex', 'name', { unique: false });
};
openRequest.onerror = function(event) {
    console.error('Error encountered:', event.target.error);
};
openRequest.onsuccess = function(event) {
    let db = event.target.result;
    console.log('Database opened successfully:', db);
};
```
- The *`keyPath`* : is used to define the primary key for the db.
- Index is created using *`createIndex`* method with parameters:
    - name 
    - propertyName : for which property from object we need it as index.
    - option : unique (to set if the    property should be unique or not).
