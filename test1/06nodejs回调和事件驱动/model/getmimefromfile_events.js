/**
 * Created by Administrator on 2017/7/2 0002.
 */

exports.getMime = (fs,EventEmitter,extname) =>{
    fs.readFile('./mime.json',(err,data) => {
        if(err) {
            return false;
        }else{
            const mime = JSON.parse(data.toString());
            EventEmitter.emit('to-mime',mime[extname])
        }
    });
};