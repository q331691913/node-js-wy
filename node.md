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

作为普通文件存在，作为命令行存在4

ting_toc -f （文件名

）是一个可以把MD文档解析html

# Express

Web网站服务器

API接口服务器

req.query  //获取到的?后面的参数

req.params //URL参数，默认是一个空对象‘ :’匹配到的



Express托管静态资源

Expreess static

app.use('/public',exp ress.static())

# 中间件

````js
const express =require('express')
const app =express()
//有了next就是中间件函数
const mw = function(req,res,next){
    
    //把流转关系传给后面的中间件
    next()
}
app.use(mw) //这样就是一个全局的中间件
app.listen(80,()=>{
    
})
````

# req.body

````js
//在服务器，可以使用req.body 这个属性，来接收客户端发送过来的请求体数据
//默认情况下，如果不配置解析表单数据的中间件，req.body默认等于underfind
app.use(express.json())
app.use(express.urlencoded({extended: false})) //这个中间件来解析表单中的url-encoded
````

# body-parser

````js
第三方旧版的Exoress解析数据的写法
````

# 定义自己的body

````js
// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()
// 导入 Node.js 内置的 querystring 模块
const qs = require('querystring')

// 这是解析表单数据的中间件
app.use((req, res, next) => {
  // 定义中间件具体的业务逻辑
  // 1. 定义一个 str 字符串，专门用来存储客户端发送过来的请求体数据
  let str = ''
  // 2. 监听 req 的 data 事件
  req.on('data', (chunk) => {
    str += chunk
  })
  // 3. 监听 req 的 end 事件
  req.on('end', () => {
    // 在 str 中存放的是完整的请求体数据
    // console.log(str)
    // TODO: 把字符串格式的请求体数据，解析成对象格式
    const body = qs.parse(str)
    req.body = body
    next()
  })
})

app.post('/user', (req, res) => {
  res.send(req.body)
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(80, function () {
  console.log('Express server running at http://127.0.0.1')
})

````

# url的方法

````js
const url =require('url')
app.use((req,res)=>{
    req.url //客户端发送来的数据
    const {query}= url.parse(req.url,true)
    req.query2 =query
    next()
})
````



# 自己写的接口注意点

CORS （Cross-Origin Resource Sharing，跨域资源共享）由一系列 HTTP 响应头组成，**这些 HTTP 响应头决定** 

**浏览器是否阻止前端 JS 代码跨域获取资源**。 

浏览器的同源安全策略默认会阻止网页“跨域”获取资源。但如果接口服务器配置了 CORS 相关的 HTTP 响应头， 

就可以解除浏览器端的跨域访问限制

````js
//先下载啊第三方的包 npm install cors 
const express =require('express')
const cors = require('cors')
const app =express()
//然后全局挂载
app.use(cors())
//响应头这样设置允许所有的请求访问
Access-Control-Allow-Origin：<origin>|*
````

MYSQL的基本使用

````mysql
SELETE password FROM new_table  //从什么列中查询数据，后面接表名
//插入数据
insert into new_table (username,password) values(	)
//将id为几的用户密码更新
update new_table set password = '511111' where id = 4
//删除表中的id为4的数据
delete from new_table where id = 4
//where 限定选择的标准
//order by id asc 升序 desc降序
//多重排序
select * form new_table order by status desc, username asc
//and 必须满足两个条件 or 满足其中之一就可以了

count 查询总数据条数 

````

