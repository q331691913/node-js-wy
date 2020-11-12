const db = require('../db/index')
const bcrypt = require('bcryptjs')
    //注册
exports.reguser = (req, res) => {
        const userinfo = req.body
        if (!userinfo.username || !userinfo.password) {
            return res.send({ status: 1, message: '用户名或者密码不合法' })
        }
        //定义sql语句
        const sqlStr = `select * from ev_users where username=?`
            //判断用户名是否被占用
        db.query(sqlStr, userinfo.username, (err, reslute) => {
            if (err) return res.send({ status: 1, message: err.message })
            if (reslute.length > 0) {
                return res.send({ status: 1, message: '用户名已被注册！' })
            }
            //给密码设置加密
            userinfo.password = bcrypt.hashSync(userinfo.password, 10)
        })
        const sqlUpdate = `insert into ev_users set ?`
        db.query(sqlUpdate, { username: userinfo.username, password: userinfo.password }, (err, reslute) => {
            if (err) return res.send({ status: 1, message: err.message })
            if (reslute.affectedRows !== 1) {
                return res.send({ status: 1, message: '注册失败，请稍后再试' })
            }
            res.send({ status: 0, message: '注册成功' })
        })
    }
    //登陆
exports.login = (req, res) => {
    res.send('ok')
}