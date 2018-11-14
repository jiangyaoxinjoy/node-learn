const http = require('http');
const sd = require('silly-datetime');
const md5 = require('md5-node');


http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
    const d = sd.format(new Date(), 'YYYY-MM-DD HH:mm');
    res.write(d);
    console.log(md5(123))
    res.end();
}).listen(8000);
