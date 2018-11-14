const url = require('url')
const http = require('http');

/**
 * 用http模块创建服务
 * req 获取url信息
 * res 浏览器返回响应信息
 */
http.createServer((req, res) => {
    if(req.url !== "/favicon.ico") {
        //第二个参数true，把值转换成对象
        const query = url.parse(req.url,true).query;
        console.log(query.id)
    }

    res.writeHead(200, {"Content-Type": "text/html;charset='utf-8'"});
    res.write('hellojjj');
    res.end();
}).listen(8111);