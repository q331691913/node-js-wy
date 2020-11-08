const express = require('express')
const app = express()
app.use(express.static('./code'))
app.listen(80, () => {
    console.log('expree server running at http://127.0.0.1');
})