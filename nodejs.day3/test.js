const itheima = require('./itheima-tools')

// 格式化时间的功能
const dtStr = itheima.dateFormat(new Date())
console.log(dtStr)
console.log("--------------------------");
const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'
const str = itheima.htmlEscape(htmlStr)
console.log(str);
const newStr = itheima.htmlUnEscape(str)
console.log((newStr));