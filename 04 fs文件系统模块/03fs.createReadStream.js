const fs = require('fs');

/**
 * fs.createReadStream()
 * 流的方式读取文件
 * 和fs.readFile()比，fs.createReadStream()文件比较大时多次读取，不会卡死
 * path
 * options
 */
const readStream = fs.createReadStream('t.txt');

let str = "";
let count = 0;
readStream.on('data', chunk =>{
    str += chunk;
    count++;
});

//读取完成
readStream.on('end',()=>{
   console.log(str);
   console.log(count);
});

//读取失败
readStream.on("error", err =>{
    console.log(err);
});