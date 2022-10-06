const fsPromise=require('fs').promises
const fs=require('fs');
const path =require('path')
const fileops=async()=>{
    try{
        const newData=await fsPromise.readFile(path.join(__dirname,'files','lorem.text'),'utf8')
        console.log(newData);
        await fsPromise.unlink(path.join(__dirname,"files","glenlinda.txt"))
        await fsPromise.writeFile(path.join(__dirname,'files','promiseWrite.txt'),newData)
        await fsPromise.appendFile(path.join(__dirname,'files','promiseWrite.txt'),"\n\n i have got a few ideas in node")
        await fsPromise.rename(path.join(__dirname,'files','promiseWrite.txt'),path.join(__dirname,'files','world.txt'))
        const data= await fsPromise.readFile(path.join(__dirname,'files','world.txt'),'utf8')
        console.log(data);
    }
    catch (err){
      console.error( err);
    }
}
fileops();
// fs.readFile('./files/starter.text','utf8',(err,data)=>{
//   if (err) throw err;
//   console.log(data);
// })
//exit on uncought errors
// process.on('uncaughtException',err=>{
//     console.error(`there was uncaught error : ${err}`);
//     process.exit(1);
// })
// //working asynchronously
// fs.readFile(path.join(__dirname,'files','starter.text'),'utf8',(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// })
// //write filling
// let data='I dont know if linda loves me'
// fs.writeFile(path.join(__dirname,'files','starter.text'),data,(err)=>{
//     if (err) throw err;
//     console.log('write complete');
//     data="\n\nI hope she does,le' me jus be ."
// //appending file
//     fs.appendFile(path.join('files','starter.text'),data,(err)=>{
//     if (err) throw err;
//     console.log('append successful');
   
//     //renaming a file
//     fs.rename(path.join(__dirname,'files','starter.text'),path.join(__dirname,'files','glenlinda.txt'),(err)=>{
//         if( err) throw err; 
//         console.log("rename complete");
//     })
// })
// })


//  //while appending the file appending to if doesnt exist by default it creates th file
//  data="If she could jus enter see through  my mind and look deep to how truly i do adore her...ahem! anway.."
//  fs.appendFile(path.join('files','linda.text'),data,(err)=>{
//     if (err) throw err;
//     console.log('append complete to a separate file');
//  })