const express = require('express')
const router = express.Router()
router.get('/', (req, res) => {
    req.send('')
})
router.post('/', (req, res) => {
    req.send('')
})
module.exports = router