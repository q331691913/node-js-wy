const mysql = require('mysql')
const db = mysql.createPool({
        host: '127.0.0.1',
        user: 'root',
        password: 'admin123',
        database: 'new_db'
    })
    // db.query('select 1', (err, res) => {
    //     if (err) return console.log(err.message);
    //     console.log(res);
    // })
    //查询new_table表中所有的数据 执行的结果是数组
const sqlStr = 'select * from new_table'
db.query(sqlStr, (err, result) => {
    if (err) return console.log(err.message);
    console.log(result);
})





const db = mysql.createPool({
    hsot: '192.168.85.232',
    user: 'root',
    password: 'admin123',
    database: 'new_db',
})