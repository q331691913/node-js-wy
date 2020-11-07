//导入http模块
const http = require('http')
    //导入fs模块
const fs = require('fs')
    //导入path模块
const path = require('path')
const server = http.createServer()
server.on('request', (req, res) => {
    const url = req.url
    let fpath = ''
    if (url === '/') {
        fpath = path.join(__dirname, './code/index.html')
    } else {
        fpath = path.join(__dirname, '/code', url)
    }
    fs.readFile(fpath, (err, dataStr) => {
        if (err) return res.end("读取文件失败了！");
        res.end(dataStr)
    })
})

server.listen(80, () => {
    console.log('server runing on http://192.168.85.194:80');
})