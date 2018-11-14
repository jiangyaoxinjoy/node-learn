/**
 * Created by Administrator on 2017/7/2 0002.
 */
exports.getMime = function (fs, extname) {  /*获取后缀名的方法*/
    let mime = fs.readFileSync('./mime.json','utf-8');
    let mimeObj = JSON.parse(mime);
    return mimeObj[extname] || 'text/html';
};