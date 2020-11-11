const express = require('express')
const app = express()
app.get('请求URL', (req, res) => {
    res.send()
})
app.post('请求URL', (req, res) => {
    res.send()
})
app.listen('端口', () => {
    console.log(' server running on http://127.0.0.1');
})