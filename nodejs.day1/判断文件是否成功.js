const fs = require('fs')
fs.readFile('./11 .txt', 'utf-8', function(err, dataStr) {
    if (err) return console.log('文件读取失败！', err.message);
    console.log(dataStr);
})