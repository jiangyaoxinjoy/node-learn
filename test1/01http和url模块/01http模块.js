//引入http模块
const http = require('http');

/**
 * 用http模块创建服务
 * req 获取url信息
 * res 浏览器返回响应信息
 */
http.createServer( (req,res) => {
    //设置响应头
    res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"});
    res.write('hellojjj');
    res.end();
}).listen(8111);