const http = require('http');
const config = require('./config')
const app = http.createServer((req,res) =>{
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    res.write('你好 jyx');
    console.log(config)
    res.end();
})
app.listen(8002,'127.0.0.1')