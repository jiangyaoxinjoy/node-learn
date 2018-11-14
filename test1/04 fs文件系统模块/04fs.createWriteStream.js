const fs = require('fs');

/**
 * fs.createWriteStream()
 * 文件流的方式写入数据
 * path
 * options
 */
const writeStream = fs.createWriteStream('t.txt')

const data = "fs.createWriteStream()流的方式写入数据";

for(let i =0;i<100;i++) {
    //可以多次写入
    writeStream.write(data,'utf8');
}

//写入完成
writeStream.end();

writeStream.on('finish',()=>{
    console.log('写入完成')
});

//写入失败
writeStream.on("error", err =>{
    console.log(err);
});