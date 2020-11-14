// 引入 express
const express = require('express');

// 创建服务器对象
const app = express();

// 导入并配置 cors 中间件
const cors = require('cors')
app.use(cors())   // 注册全局可用的中间件

// 配置解析表单数据的中间件  这个中间件 只能解析 application/x-www-form-urlencoded 格式的表单数据
app.use(express.urlencoded({ extended: false }))


// 导入并使用用户路由模块
const userRouter = require('./router/user')
app.use('/api', userRouter)

// 监听端口
app.listen(3007, () => console.log('api server running at http://localhost:3007'));

