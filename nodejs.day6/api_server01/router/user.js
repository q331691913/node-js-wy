// 引入 express
const express = require('express');
// 创建路由对象
const router = express.Router()

const userHandler = require('../router_handler/user')

// 注册
router.post('/reguser', userHandler.regUser)
// 登录
router.post('/login', userHandler.login)

// 挂载 暴露
module.exports = router