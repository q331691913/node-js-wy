//1.导入 express
const express = require('express')
    //2.创建web服务器
const app = express()
    //4.监听客户端的get和post请求 并向客户端响应具体的内容
app.get('/user', (req, res) => {
    req.url
        //调用res.send()响应一个json对象给客户端
    res.send({ name: 'zs', age: 18 })
})
app.post('/uesr/', (req, res) => {
        res.send('请求成功')
    })
    // 3.启动web服务器
app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})