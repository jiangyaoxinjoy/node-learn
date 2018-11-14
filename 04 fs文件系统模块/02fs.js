// 1. 判断服务器上有没有unload目录，如果没有就创建这个目录
const fs = require('fs');

/*
fs.stat('upload', (err, stats) => {
    if (err) {
        fs.mkdir('upload', error => {
            if (error) {
                console.log(error);
                return false;
            }
            console.log('upload创建成功')
        });
    }else{
        console.log('upload已经存在' + stats.isDirectory())
    }
});
*/

// 2. 找出html目录下的所有目录，打印出来
const fielsArr = [];
fs.readdir('html', (err, files) => {
    if (err) {
        console.log(err);
        return false;
    } else {
        files.forEach((item, index) => {
            fs.stat('html/' + item, (err, stats) => {
                if (stats.isDirectory()) {
                    fielsArr.push(item);
                    if (index === files.length - 1) {
                        console.log(fielsArr)
                    }
                }
            })

        });


        /*
        //递归的方法
        console.log(files);
        const i = 0;
        (function getFiles(i) {
            if (i == files.length) {
                console.log(fielsArr)
                return false;
            }
            fs.stat('html/'+files[i], (error, stats) => {
                if(stats.isDirectory()) {
                    fielsArr.push(files[i])
                }
                getFiles(i+1);
            })
        })(i);
        */
    }
});

