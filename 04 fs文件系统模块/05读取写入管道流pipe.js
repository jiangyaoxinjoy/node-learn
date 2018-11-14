const fs = require('fs');

//创建一个可读流
const readerStream = fs.createReadStream('t.txt');

//创建一个可写流
const writeStream = fs.createWriteStream('t1.txt');

//管道读写操作
//读取t.txt文件内容，并将内容写入到t1.txt
readerStream.pipe(writeStream);
console.log('执行完毕');