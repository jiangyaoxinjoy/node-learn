/**
 * Created by Administrator on 2017/7/3 0003.
 */

//异步，非阻塞io     1,3,2
const fs=require('fs');

/*
console.log('1');
fs.readFile('mime.json', (err,data) =>{
    // console.log(data.toString())
    console.log('2');
});
console.log('3');
*/

/*
function getMime() {
    // 因为是非阻塞的，所以先执行1，然后3，最后2。所以执行3的时候return了undefined。
    console.log('1')
    fs.readFile('mime.json', (err,data) =>{
        console.log('2');
        return data.toString();
    });
    console.log('3');
}
console.log(getMime());
*/


//用回调函数的方法得到异步返回的数据。
function getMime(callback) {
    console.log('1')
    fs.readFile('mime.json', (err,data) =>{
        console.log('2');
        callback(data.toString())
    });
}
getMime( function (data) {
    console.log(data);
});