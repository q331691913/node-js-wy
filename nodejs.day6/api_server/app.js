// 引入 express
const express = require('express');

// 创建服务器对象
const app = express();
//解决跨域
const cors = require('cors')
app.use(cors())
    //解析post数据
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
    //调用路由
const userRouter = require('./router/user')
app.use('/api', userRouter)
    // TODO:

// 监听端口
app.listen(3000, () => console.log('Server running on http://localhost:3000'));