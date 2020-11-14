// 引入 express
const express = require('express');

// 创建服务器对象
const app = express();
//解决跨域
const cors = require('cors')
app.use(cors())
app.use((req, res, next) => {
        // status 默认值为 1，表示失败的情况
        // err 的值，可能是一个错误对象，也可能是一个错误的描述字符串
        res.cc = function(err, status = 1) {
            res.send({
                status,
                message: err instanceof Error ? err.message : err,
            })
        }
        next()
    })
    //解析post数据
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const config = require('./config')

// 解析 token 的中间件
const expressJWT = require('express-jwt')
    // 使用 .unless({ path: [/^\/api\//] }) 指定哪些接口不需要进行 Token 的身份认证
app.use(expressJWT({ secret: config.jwtSecretKey }).unless({ path: [/^\/api\//] }))
    //调用路由
const userRouter = require('./router/user')
app.use('/api', userRouter)
const userinfoRouter = require('./router/userinfo')
    // 注意：以 /my 开头的接口，都是有权限的接口，需要进行 Token 身份认证
app.use('/my', userinfoRouter)
    // TODO:
    //全局错误
const joi = require('@hapi/joi')

// 错误中间件
app.use(function(err, req, res, next) {
        // 数据验证失败
        if (err instanceof joi.ValidationError) return res.cc(err)
        if (err.name === 'UnauthorizedError') return res.cc('身份认证失败！')
            // 未知错误
        res.cc(err)
    })
    // 监听端口
app.listen(3007, () => console.log('Server running on http://localhost:3007'));