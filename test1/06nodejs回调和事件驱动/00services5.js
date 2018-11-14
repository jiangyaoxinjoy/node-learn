const fs = require('fs');
const url = require('url');
const path = require('path');
const http = require('http');
const events = require('events');
const EventEmitter = new events.EventEmitter();

const mimeModel = require('./model/getmimefromfile_events');
// mimeModel.getMime(fs,EventEmitter,'.css');
// EventEmitter.on('to-mime',data => {
//    console.log(data);
// }); //test
http.createServer((req,res) =>{
    let pathname = url.parse(req.url).pathname;
    let extname = path.extname(pathname);
    if(pathname === '/') {
        pathname = '/index.html';
    }
    if(pathname !== '/favicon.ico') {
        fs.readFile(`static/${pathname}`,(err,data) =>{
            if(err) {
                fs.readFile('static/404.html',(error,data404) =>{
                    if(error) {
                        console.log(error);
                        return false;
                    }
                    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
                    res.write(data404);
                    res.end();
                });
               return false;
            }else{
                mimeModel.getMime(fs,EventEmitter,extname);
                let mime ="";
                EventEmitter.once('to-mime',mime=>{
                    res.writeHead(200,{"Content-Type":`${mime};charset=utf-8`});
                    res.end(data);
                });
            }
        })
    }
}).listen(8001);
