// 引入 express
const express = require('express');
const cors = require('cors')
const router = require('./01-模块化路由')

// 创建服务器对象
const app = express();
//解析前端来的数据
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
    // jsop格式的跨域
app.get('/api/json', (req, res) => {
        const funcName = req.query.callback
        const data = { name: 'zs', age: 22 }
        const scriptStr = `${funcName}(${JSON.stringify(data)})`
        res.send(scriptStr)
    })
    // cors解决 跨域
app.use(cors())
    // TODO:
    //挂载路由
app.use('/api', router)
app.listen(3000, () => console.log('Server running on http://localhost:3000'));