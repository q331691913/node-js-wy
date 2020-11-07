//导入http模块
const http = require('http')
    //导入fs模块
const fs = require('fs')
    //导入path模块
const path = require('path')
    //创建web服务
const server = http.createServer()
    //server 监听request
server.on('request', (req, res) => {
        const url = req.url
        let fpath = ''
        if (url === '/') {
            fpath = path.join(__dirname, './code/index.html')
        } else {
            fpath = path.join(__dirname, '/code', url)
        }
        fs.readFile(fpath, (err, dataStr) => {
            if (err) return res.end('读取文件失败！')
            res.end(dataStr)
        })
    })
    // 启动服务器
server.listen(80, () => {
    console.log('server runing on http://127.0.0.1:80');
})