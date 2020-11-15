const express = require('express')
const router = express.Router()

// 导入文章分类的路由处理函数模块
const artcate_handler = require('../router_handler/artcate')

// 获取文章分类的列表数据
router.get('/cates', artcate_handler.getArticleCates)
    //新增文章分类
    // router.post('/addcates', artcate_handler.addArticleCates)
module.exports = router