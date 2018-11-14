const fs = require('fs');

const events = require('events');
const EventEmitter = new events.EventEmitter();
console.log(EventEmitter)

function getMime() {
    fs.readFile('mime.json',(err,data) =>{
        //广播data事件
        EventEmitter.emit('data',data.toString());
    });
}
getMime();

//监听data广播
Emitter.on('data',(mime) =>{
    console.log(mime);
});