const fs = require('fs')
fs.readFile('./成绩.txt', 'utf-8', function(err, dataStr) {
    if (err) { return console.log('失败'); } else {
        let arrOld = dataStr.split(' ')
        let arrNew = []
        arrOld.forEach(item => arrNew.push(item.replace('=', ':')))
        let newStr = arrNew.join('\r\n')
        console.log(newStr);

        fs.writeFile('./gei.txt', newStr, function(err) {
            if (err) return console.log('写入错误');
            console.log('成功');
        })
    }
})