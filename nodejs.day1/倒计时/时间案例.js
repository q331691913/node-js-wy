const fs = require('fs')
const path = require('path')
    //定义正则表达式
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/
    //读取文件
fs.readFile(path.join(__dirname, './index.html'), 'utf8', function(err, dataStr) {
    if (err) return console.log('读取失败');
    resolveCSS(dataStr)
    resolveJs(dataStr)
    resolveHTML(dataStr)
})

function resolveCSS(htmlStr) {
    // 3.2 使用正则提取需要的内容
    const r1 = regStyle.exec(htmlStr)

    // 3.3 将提取出来的样式字符串，进行字符串的 replace 替换操作
    const newCSS = r1[0].replace('<style>', '').replace('</style>', '')
        // 3.4 调用 fs.writeFile() 方法，将提取的样式，写入到 clock 目录中 index.css 的文件里面
    fs.writeFile(path.join(__dirname, './code/index.css'), newCSS, function(err) {
        if (err) return console.log('写入 CSS 样式失败！' + err.message)
        console.log('写入样式文件成功！')
    })
}

function resolveJs(htmlStr) {
    //匹配满足条件的正则
    const r2 = regScript.exec(htmlStr)
    const newJs = r2[0].replace('<script>', '').replace('</script>', '')
        //写入
    fs.writeFile(path.join(__dirname, './code/index.js'), newJs, function(err) {
        if (err) return console.log('写入失败');
        console.log('写入样式成功');
    })
}

function resolveHTML(htmlStr) {
    // 5.2 将字符串调用 replace 方法，把内嵌的 style 和 script 标签，替换为外联的 link 和 script 标签
    const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css" />').replace(regScript, '<script src="./index.js"></script>')
        // 5.3 写入 index.html 这个文件
    fs.writeFile(path.join(__dirname, './code/index.html'), newHTML, function(err) {
        if (err) return console.log('写入 HTML 文件失败！' + err.message)
        console.log('写入 HTML 页面成功！')
    })
}