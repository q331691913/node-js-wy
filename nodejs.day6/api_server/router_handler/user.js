const db = require('../db/index')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../config')

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
            console.log(reslute);
            if (err) return res.send({ status: 1, message: err.message })
            if (reslute.length > 0) {
                return res.send({ status: 1, message: '用户名已被注册！' })
            }
            //给密码设置加密
            userinfo.password = bcrypt.hashSync(userinfo.password, 10)
            const sqlUpdate = `insert into ev_users set ?`
            db.query(sqlUpdate, { username: userinfo.username, password: userinfo.password }, (err, reslute) => {
                if (err) return res.send({ status: 1, message: err.message })
                if (reslute.affectedRows !== 1) return res.send({ status: 1, message: '注册失败，请稍后再试' })
                res.send({ status: 0, message: '注册成功' })



            })
        })

    }
    //登陆
exports.login = (req, res) => {
    const userinfo = req.body
    const sql = `select * from ev_users where username=?`
    db.query(sql, userinfo.username, function(err, results) {
        // 执行 SQL 语句失败
        if (err) return res.cc(err)
            // 执行 SQL 语句成功，但是查询到数据条数不等于 1
        if (results.length !== 1) return res.cc('登录失败！')
            // TODO：判断用户输入的登录密码是否和数据库中的密码一致
        const compareResult = bcrypt.compareSync(userinfo.password, results[0].password)

        // 如果对比的结果等于 false, 则证明用户输入的密码错误
        if (!compareResult) {
            return res.cc('登录失败！')
        }
        const user = {...results[0], password: '', user_pic: '' }
        const tokenStr = jwt.sign(user, config.jwtSecretKey, { expiresIn: config.expiresIn })
            // 调用 res.send() 将 Token 响应给客户端
        res.send({
            status: 0,
            message: '登录成功！',
            token: 'Bearer ' + tokenStr,
        })
    })
}