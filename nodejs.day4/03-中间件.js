const express = require('express')
const app = express()
const mw = function(req, res, next) {
    console.log('这是个最简单的中间件');
    next()
}
app.use(mw)
app.get('/', (req, res) => {
    console.log('111111');
    res.send('芜湖1？')

})
app.get('/', (req, res) => {
    console.log('22222');
    res.send('芜湖2？')

})
app.listen(80, () => {
    console.log('http://127.0.0.1');
})