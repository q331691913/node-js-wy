const mysql = require('mysql')
const db = mysql.createPool({
    host: '192.168.85.232',
    user: 'root',
    password: 'admin123',
    database: 'new_db'
})
const sql = `select * from new_table`
    // const user = { username: 'wanyi11', password: 'pcc321122' }
    // const addTable = `insert into new_table (username,password) values(?,?)`
    // const addTable = `insert into new_table set ?`

//增
// db.query(addTable, [user.username, user.password], (err, res) => {
//         if (err) return console.log(err.message);
//         if (res.affectedRows === 1) {
//             console.log('插入数据成功');
//         }
//     })
// 查
// db.query(sql, (err, res) => {
//     if (err) return console.log(err.message);
//     return console.log(res);
// })

//改 更新数据   
// const user = { id: 6, username: 'wwwwwwww', password: '66666666' }
// const sqlStr = `update new_table set ? where id=?`
// db.query(sqlStr, [user, user.id], (err, res) => {
//     if (err) return console.log(err.message);
//     if (res.affectedRows === 1) {
//         console.log('更新数据成功');
//     }
// })

//删除数据
// const sqlStr = `delete from new_table where id=?`
// db.query(sqlStr, ,6 (err, res) => {
//     if (err) return console.log(err.message);
//     if (res.affectedRows === 1) {
//         return console.log('删除数据成功');
//     }
// })

//标记删除
db.query(`update new_table set status=1 where id in (1,2,3)`, (err, res) => {
    if (err) return console.log(err.message)
    if (res.affectedRows > 0) {
        console.log('标记删除成功');
    }
})