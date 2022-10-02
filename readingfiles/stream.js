const fs= require('fs');
const path = require('path');
const rs =fs.createReadStream(path.join(__dirname,'files','lorem.text'),{encoding:'utf8'})
const ws= fs.createWriteStream(path.join(__dirname,'files','newLorem.txt'));
// rs.on('data',(dataChunk)=>{
//     ws.write(dataChunk);
// })
rs.pipe(ws)
const bx=fs.createReadStream(path.join(__dirname,'files','newLorem.txt'),{encoding:'utf8'})
const  vb=fs.createWriteStream(path.join(__dirname,'files','test.txt'))
bx.pipe(vb)