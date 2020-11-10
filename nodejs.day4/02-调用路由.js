const express = require('express')
const app = express()
app.use(require('./01-模块化路由'))
app.listen(80, () => {
    console.log('http://127.0.0.1');
})