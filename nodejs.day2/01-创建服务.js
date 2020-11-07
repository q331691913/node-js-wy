const { read } = require('fs')
const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
    //req 请求对象
    // res 响应对象
    //为了防止中文显示乱码的问题，需要设置响应头 Content-Type的值为text/html  charset =utf-8
    if (req.method === 'GET') {
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        if (req.url === '/') {
            res.end('欢迎来到首页')
        } else if (req.url === '/news') {
            res.end('<h2>欢迎来个新闻页面</h2>')
        } else {
            res.end('找不到此页面，404')
        }

    } else {
        res.end('老铁你好帅哦')
    }
    // res.setHeader('Content-Type', 'text/html; charset=utf-8')
    // res.end('Hellow 爱你')
    // res.end('hello world')
})
server.listen(3000, () => {
    console.log('Sever running on http://127.0.0.1:3000');
})