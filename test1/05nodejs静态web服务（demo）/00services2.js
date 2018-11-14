//引入http模块
const http = require('http');

//fs模块

const fs = require('fs');

//path模块
const path = require('path');
/*nodejs自带的模块*/


const mimeModel = require('./model/getmimefromfile_bac');

// console.log(mimeModel.getMime('.css'));   //获取文件类型

http.createServer(function (req, res) {
    //http://localhost:8001/news.html    /news.html
    //http://localhost:8001/index.html    /index.html
    //css/dmb.bottom.css

    let pathname = req.url;

    if (pathname === '/') {
        pathname = '/index.html';
        /*默认加载的首页*/
    }

    //获取文件的后缀名
    const extname = path.extname(pathname);

    if (pathname !== '/favicon.ico') {  /*过滤请求favicon.ico*/
        fs.readFile('static/' + pathname, function (err, data) {
            const mime = mimeModel.getMime(extname);
            if (err) {  /*么有这个文件*/
                fs.readFile('./static/404.html', (err, data404) => {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log('404');
                        res.writeHead(200, {"Content-Type": `${mime};charset='utf-8'`});
                        res.write(data404);
                        res.end()
                    }
                });
            } else { /*返回这个文件*/
                /*获取文件类型*/
                res.writeHead(200, {"Content-Type": `${mime};charset='utf-8'`});
                res.write(data);
                res.end();
                /*结束响应*/
            }
        })
    }
}).listen(8001);




