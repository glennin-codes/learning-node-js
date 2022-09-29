//the console is the trminal window
console.log("hello world");
//uses global object instade of window object
//console.log(global);

//uses common modules instead of es6 modules
const Os = require('os');
const path= require('path')
console.log(Os.type());
console.log(Os.version());
console.log(Os.homedir());
 
// console.log(__dirname);
// console.log(__filename);
console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));