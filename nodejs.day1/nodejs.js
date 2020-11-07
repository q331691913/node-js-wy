const fs = require('fs')
fs.readFile('./11.txt', 'utf8', function(err, dataStr) {
    console.log(err);
    console.log('_______');
    console.log(dataStr);
})