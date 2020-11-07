# node方法

````js
//读取方法
const fs = require('fs')
fs.readFile(path[,options],callback)
//function(err,dataStar)

//写入方法
const fs =require('fs')
fs.writeFile('path','HELLO NODE.JS!',function(err){
    console.log(err)
})
````

/g所有的

fs中的./代表的是当前的工作路径

**__dirname** //表示当前文件所处的目录

**path.join()** 路径拼接

**path.basename()**可以在文件路径中，获取到文件名称的部分

**path.extname()** 获得文件的扩展名

**exec()**   匹配正则表达式

reg.test() //提取

str.match() 也是匹配正则也能匹配字符串

str.replace(reg,内容)

# 创建服务器

````js
//导入http模块
const http =require('http')
//创建web服务器实例
const server =http.createServer()
//为服务器实例绑定request 事件，监听客户端请求
server.on('request',function(req,res){
     console.log('Someone visit our web server')
})
//启动服务器
server.listen(80,function(){
    console.log('server running at http://127.0.0.1:8080')
})
````

了解req请求对象js

````js
server.on('requset',(req)=>{
    const url =req.url
    const method =req.method
    const str =`Your request url is ${url},and request method is ${method}`
    res.setHeader('Content-Type','text/html;charset=utf-8')
    conlog.log(str)
    res.end(str)
})

//解决中文乱码设置一个响应头
res.setHeader('Content-Type','text/html;charset=utf-8')
````

