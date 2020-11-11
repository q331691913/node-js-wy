// 引入 express
const express = require('express');
const cors = require('cors')
const router = require('./09-apiRoute');

// 创建服务器对象
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.get('/api/json', (req, res) => {
    const funcName = req.query.callback
    const data = { name: 'zs', age: 22 }
    const scriptStr = `${funcName}(${JSON.stringify(data)})`
    res.send(scriptStr)
})
app.use(cors())
app.use('/api', router)
    // TODO:

// 监听端口
app.listen(3000, () => console.log('Server running on http://localhost:3000'));