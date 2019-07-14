console.log('Password Manager starting');


const storage = require('node-persist');
 
//you must first call storage.init
 storage.init( /* options ... */ );
 storage.setItem('name','yourname')
console.log( storage.getItem('name')); // yourname