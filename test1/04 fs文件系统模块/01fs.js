const fs = require('fs');

//fs.stat检测是文件还是目录
fs.stat('html', (err, stats) => {
    if (err) {
        console.log(err);
        return false;
    }
    // console.log("文件：" + stats.isFile());
    // console.log("目录：" + stats.isDirectory());
});

/**
 * fs.mkdir 创建目录
 * path  创建目录的路径
 * mode 目录权限(读写权限)，默认0777
 * callback 回调，传递异常参数err
 */
// fs.mkdir('css',err=> {
//     if(err) {
//         console.log(err)
//         return false;
//     }
//     console.log('css 目录创建成功')
// })；

/**
 * fs.writeFile 写入
 * 会覆盖之前的内容
 * path
 * data
 * options
 * callback
 */
fs.writeFile('t.txt','t.txt的内容',(err) =>{
    if(err) {
        console.log(err)
        return false;
    }
    // console.log('t.txt写入成功')
});

/**
 * fs.appendFile
 * 文件不存在会创建
 * 文件存在内容会追加
 */
fs.appendFile('t1.txt','这是写入的内容2', err=>{
    if(err) {
        console.log(err)
        return false;
    }
    // console.log('t1.txt写入成功')
});

fs.readFile('t.txt', (err,data) =>{
    if(err) {
        console.log(err)
        return false;
    }
    //data是16进制的编码信息，转化成string
    // console.log(data.toString());
});

/**
 * fs.readdir 读取目录
 * 把目录下的所有文件都读取到
 * path
 * options
 * callback
 */
fs.readdir('html',(err,data) => {
    if(err) {
        console.log(err)
        return false;
    }
    // console.log(data);
});

/**
 * fa.rename 重命名
 * oldpath
 * newpath
 * callback
 */
/*
fs.rename('html/new.html','html/html.html', (err) =>{
    if(err) {
        console.log(err)
        return false;
    }
    console.log('重命名成功');
});
*/

/**
 * fs.rmdir 删除目录
 * path
 * callbakc
 */
/*
fs.rmdir('css',err =>{
    if(err) {
        console.log(err)
        return false;
    }
    console.log('删除目录成功');
});
*/

/**
 * fs.unlink 删除文件
 */
/*
fs.unlink('t.txt', err =>{
    if(err) {
        console.log(err)
        return false;
    }
    console.log('删除文件成功');
});
*/