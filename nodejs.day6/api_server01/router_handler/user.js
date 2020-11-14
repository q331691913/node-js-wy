const db = require('../db/index')

const bcrypt = require('bcryptjs')
    // 注册用户的处理函数
exports.regUser = (req, res) => {
    // 接收表单数据
    const userinfo = req.body
        // console.log(userinfo);
        // console.log(userinfo.password);
        // 判断数据是否合法
    if (!userinfo.username || !userinfo.password) {
        return res.send({ status: 1, message: '用户名或密码不能为空！' })
    }


    // 定义 sql 语句  查询用户名是否被占用
    const sqlStr = `select * from ev_users where username=?`
    db.query(sqlStr, userinfo.username, (err, results) => {
        // console.log(results);
        if (err) {
            return res.send({ status: 1, message: err.message })
        }
        // 用户名被占用的情况下 长度大于0
        if (results.length > 0) {
            return res.send({ status: 1, message: '用户名被占用' })
        }
        // 对用户的密码, 进行 bcrype 加密，返回值是加密之后的密码字符串
        // console.log(userinfo);
        userinfo.password = bcrypt.hashSync(userinfo.password, 10)
            // console.log(userinfo);

    })

    // res.send('reguser ok')


}


// 登录的处理函数
exports.login = (req, res) => {
    res.send('login ok')
}


// const db = require('../db/index')
// const bcrypt = require('bcryptjs')
// //注册
// exports.reguser = (req, res) => {
//     const userinfo = req.body
//     if (!userinfo.username || !userinfo.password) {
//         return res.send({ status: 1, message: '用户名或者密码不合法' })
//     }
//     //定义sql语句
//     const sqlStr = `select * from ev_users where username=?`
//     //判断用户名是否被占用
//     db.query(sqlStr, userinfo.username, (err, reslute) => {

//         if (err) return res.send({ status: 1, message: err.message })
//         if (reslute.length > 0) {
//             return res.send({ status: 1, message: '用户名已被注册！' })
//         }
//         //给密码设置加密
//         userinfo.password = bcrypt.hashSync(userinfo.password, 10)
//         const sqlUpdate = `insert into ev_users set ?`
//         db.query(sqlUpdate, { username: userinfo.username, password: userinfo.password }, (err, reslute) => {
//             if (err) return res.send({ status: 1, message: err.message })
//             if (reslute.affectedRows !== 1) return res.send({ status: 1, message: '注册失败，请稍后再试' })
//             res.send({ status: 0, message: '注册成功' })


//         })
//     })

// }
// //登陆
// exports.login = (req, res) => {
//     res.send('ok')
// }