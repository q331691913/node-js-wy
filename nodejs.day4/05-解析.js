const express = require('express')
const app = express()
    //通过express.json()这个中间件，来解析表单中的JSON格式的数据
app.use(express.json())
    //urlebcoded这个中间件用来解析表单中url-encded数据的
app.use(express.urlencoded({ extends: false }))
app.post('/user', (req, res) => {
    //req.body接受客户端发送过来的请求体数据
    console.log(req.body);
    res.send('ok')
})
app.listen(80, () => {
    console.log('http//:127.0.0.1');
})