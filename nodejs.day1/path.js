const path = require('path')
const fs = require('fs')
let absolutePath = path.join(__dirname, './11.txt')
fs.readFile(absolutePath, 'utf-8', function(err, dataStr) {
    if (err) return console.log('没读到');
    console.log('读到了' + dataStr);
})