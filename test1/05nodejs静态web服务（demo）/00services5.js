const http = require('http');
const path = require('path');
const url = require('url');
const fs = require('fs');

const mimeModel = require('./model/getmimefromfile.js');
// console.log(mimeModel.getMime(fs,'.css'));

http.createServer( (req,res) =>{
    console.log(req.url);
    let pathname = url.parse(req.url).pathname;
    const extname = path.extname(pathname);
    if(pathname === '/') {
        pathname = '/index.html'
    }
    if(pathname !== '/favicon.ico') {
        fs.readFile(`static/${pathname}`,(error,data) =>{
            if(error) {
                fs.readFile('static/404.html', (err,data404) =>{
                    if(err) {
                        console.log(err);
                        return false;
                    }else{
                        res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
                        res.write(data404);
                        res.end();
                    }
                });
                return false;
            }else{
                const mime = mimeModel.getMime(fs,extname);
                res.writeHead(200,{"Content-Type":`${mime};charset=utf-8`});
                res.write(data);
                res.end();
            }
        });

    }
}).listen(8001);




