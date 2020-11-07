const fs = require('fs')
const path = require('path')
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/
    //读取
fs.readFile(path.join(__dirname, 'index.html'), 'utf-8', function(err, dataStr) {
    if (err) return console.log('读取文件失败' + err.message);
    extractStyle(dataStr)
    extractScript(dataStr)
    extractHTML(dataStr)
})

function extractStyle(htmlStr) {
    const r1 = regStyle.exec(htmlStr)
    const newCSS = r1[0].replace('<style>', '').replace('</style>', '')
    fs.writeFile(path.join(__dirname, './code/index.css'), newCSS, function(err) {
        if (err) return console.log('写入css失败了');
        console.log('写入css成功');
    })
}

function extractScript(htmlStr) {
    const r2 = regScript.exec(htmlStr)
    const newJs = r2[0].replace('<script>', '').replace('</script>', '')
    fs.writeFile(path.join(__dirname, './code/index.js'), newJs, function(err) {
        if (err) return console.log('写入js失败了');
        console.log('写入Js成功');
    })
}

function extractHTML(htmlStr) {
    const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css"/>').replace(regScript, '<script src="./index.js"> </script>')
    fs.writeFile(path.join(__dirname, './code/index.html'), newHTML, function(err) {
        if (err) return console.log('写入html失败了');
        console.log('写入html成功');
    })
}