const openRequest = window.indexedDB.open('test', 1);

openRequest.onupgradeneeded = function(event) {
    let db = event.target.result;
    let objectStore = db.createObjectStore('MyObjectStore', { keyPath: 'id' }); // 'id' should be a string
    objectStore.createIndex('nameIndex', 'name', { unique: false });
};

openRequest.onerror = function(event) {
    console.error('Error encountered:', event.target.error);
};

openRequest.onsuccess = function(event) {
    let db = event.target.result;
    console.log('Database opened successfully:', db);

    // You can access the database and perform further operations here
};
