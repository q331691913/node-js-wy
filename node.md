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

**快捷创建 package.json : npm init -y**  注意：自能在英文目录下才能运行成功 空格也不行

装包之后就会多出一个节点：dependencies  这个节点记录你装了啥包

npm install 读取自己的节点里面的所有包 安装这些

npm uninstall 命名 卸载指定的包  成功后自动从package立的dependencies中移除这些  卸载全局给个-g

devDependencies 节点里面存的是开发阶段用的包，上线之后用不上的包

**项目包和全局包**

包的两种存在形式

作为普通文件存在，作为命令行存在

ting_toc -f （文件名

）是一个可以把MD文档解析html

# Express

Web网站服务器

API接口服务器

req.query  //获取到的?后面的参数

req.params //是东陶匹配道的URL参数，默认是一个空对象