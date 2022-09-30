
const fs=require('fs');
fs.readFile('./files/stater.text','utf8',(err,data)=>{
  if (err) throw err;
  console.log(data);
})
//exit on uncought errors
process.on('uncaughtException',err=>{
    console.error(`there was uncaught error : ${err}`);
    process.exit(1);
})