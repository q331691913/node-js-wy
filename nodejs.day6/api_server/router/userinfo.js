const express = require('express')
const router = express.Router()
const expressJoi = require('@escook/express-joi')
    // 导入用户信息的处理函数模块
const userinfo_handler = require('../router_handler/userinfo')
const { update_userinfo_schema } = require('../schema/user')
    // 导入需要的验证规则对象
const { update_userinfo_schema, update_password_schema } = require('../schema/user')
    // 获取用户的基本信息
router.get('/userinfo', userinfo_handler.getUserInfo)
    // router.post('/userinfo', userinfo_handler.updateUserInfo)
    //更新用户信息
router.post('/userinfo', expressJoi(update_userinfo_schema), userinfo_handler.updateUserInfo)
    //重置密码 
router.post('/updatepwd', expressJoi(update_password_schema), userinfo_handler.updatePassword)
module.exports = router