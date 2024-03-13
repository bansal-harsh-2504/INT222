//29-1-24
/*
const a = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
a.question('Enter a value:',(userInput)=>{
    const num = parseInt(userInput);
    if(!isNaN(num)){
        table(userInput);
    }
    else{
        console.log('Invalid Input');
    }
    a.close();
});

function table(fromNumber){
    let num = 0;
    console.log("table: ");
    let interval = setInterval(function(){
        num++;
        if(num<11){
            console.log(fromNumber,"*",num,"=",fromNumber*num);
        }
        else{
            console.log('End');
            clearInterval(interval);
        }
    },1000);
}
*/

//14-2-24
/*
const EventEmitter = require('events');
var eventEmitter1 = new EventEmitter();
var eventEmitter2 = new EventEmitter();
console.log("Default max listener for eventEmitter1 is: ",
eventEmitter1.getMaxListeners());
console.log("Default max listener for eventEmitter2 is: ",
eventEmitter2.getMaxListeners());
EventEmitter.defaultMaxListeners = 2;
console.log("Default max listener for eventEmitter1 is: ",
eventEmitter1.getMaxListeners());
console.log("Default max listener for eventEmitter2 is: ",
eventEmitter2.getMaxListeners());
eventEmitter1.setMaxListeners(5);
console.log("Default max listener for eventEmitter1 is: ",
eventEmitter1.getMaxListeners());
console.log("Default max listener for eventEmitter2 is: ",
eventEmitter2.getMaxListeners());
var fun1 = (msg) => 
{
console.log("Message from fun1: " + msg);
};
var fun2 = (msg) => 
{
console.log("Message from fun2: " + msg);
};
for(var i = 0; i < 4; i++)
{
eventEmitter1.once('myEvent1', fun1)
}
for(var i = 0; i < 2; i++)
{
eventEmitter2.once('myEvent2', fun2)
}
eventEmitter2.emit('myEvent2', 'Event2 occurred');
eventEmitter1.removeAllListeners('myEvent1',fun1);
eventEmitter1.emit('myEvent1', 'Event1 occurred');
 */

/*
var event = require('events'); 
var myEmitter = new event.EventEmitter();
myEmitter.on('anEvent', function(msg)
{
console.log(msg);      
});
myEmitter.emit('anEvent', 'I am emitted');
myEmitter.emit('anEvent', 'I am emitted');
myEmitter.removeAllListeners('anEvent');
myEmitter.emit('anEvent', 'I am emitted');
myEmitter.emit('anEvent', 'I am emitted');
*/

/*
var http = require('http');
var server=http.createServer(function (req,res)
{ if(req.url=='/')
{ res.write('Welcome to Index page');
res.end();
} else if (req.url== "/emp")
{ res.write('Welcome to Employees page');
res.end();
}else if (req.url=="/admin")
{res.write('Welcome to Admin page');
res.end();
} else res.end('Invalid Request!'); });
server.listen(2020);
console.log('Server is running at port 2020')
*/

/*
var http = require ('http');
var fs = require ('fs');
http.createServer(function (req, res){
    console.log("File is About to read");
fs.readFile('Input.txt', function(err, data){
res.write(data);
return res.end();
});
}).listen(5000);
*/


//21-2-24
/*
const buf3=Buffer.from('Abcdefgah');
console.log(buf3.includes(61));

const buf= Buffer.alloc(5);
console.log(buf.fill('abcdef'));

const buf1 = Buffer.from('This is Node.js class');
const buf2 = Buffer.from('54686973206973204e6f64652e6a7320636c617373','hex');
console.log(buf1.toString('hex',5,15));
console.log(buf2.toString('utf8',5,10));

buf=new Buffer.alloc(50);
n=buf.write('This is Nodejs class ');
console.log('The number of octets are:'+n);

var buf1 = Buffer.from('wow');
var buf2= Buffer.from('hello');
var buf3 = Buffer.concat([buf1,buf2],5);
console.log("The contents are " + buf3.toString());

var buffer1 = Buffer.from('ABCD');
var buffer2 = Buffer.from('ABcD');
var result = buffer1.compare(buffer2);
if(result === 0)
{
console.log(buffer1+"is equal to "+ buffer2);
}
else
{
console.log(buffer1+"is not equal to"+ buffer2);
}

var buffer1 = Buffer.from('This is Nodejs');
var buffer2 = Buffer.alloc(10);
buffer1.copy(buffer2,4,4,10);
console.log("buffer2 content: " + buffer2.toString());
*/

/*
var fs = require("fs");
fs.readFile('Input.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log(data);
});

var http = require ('http');
var fs = require ('fs');
http.createServer(function (req, res){
    console.log("File is open at localhost:5000");
fs.readFile('Input.txt', function(err, data){
res.write(data);
return res.end();
});
}).listen(5000);

var fs = require('fs');
fs.appendFile('Input.txt','\nAdding New  Content Using appendFile Method!',
function (err){
if(err)throw err;
console.log('The content is Appended!!!!');
});

var fs = require('fs');
fs.open('Input2.txt','w',function(err,file){
   fs.writeFile('Input2.txt','\n I am added while open',function (err)
   {
      console.log('Content added and Saved!!');
   });
if(err)throw err;
console.log('Saved!');
});

var fs = require('fs');
fs.writeFile('Input3.txt','I am a New file',
function (err){
if(err)throw err;
console.log('Content added and Saved!!');
});

var fs = require('fs');
fs.rm('Input2.txt',function (err){
if(err)throw err;
console.log('File Deleted!');
});

var fs = require('fs');
fs.copyFile('Inputnew.txt','Input2.txt',
function (err){
if(err)throw err;
console.log('File Copied!');
});

var fs = require('fs');
fs.chmod('Input1.txt',0o775,
function (err){
if(err)throw err;
console.log('File Mode Changed');
});

const data = {
   name: "John Doe",
   age: 32,
   title: "Vice President of JavaScript"
 }
 const jsonStr = JSON.stringify(data);
 console.log(jsonStr);
*/

//26-2-24

/*
const buf3=Buffer.from('Abcdefgah');
console.log(buf3.includes(61));

const buf= Buffer.alloc(5);
console.log(buf.fill('hello',3,4));

const buf1 = Buffer.from('This is Node.js class');
const buf2 = Buffer.from('54686973206973204e6f64652e6a7320636c617373','hex');
console.log(buf1.toString('hex',5,15));
console.log(buf2.toString('utf8',5,10));

buf=new Buffer.alloc(50);
n=buf.write('This is Nodejs class ');
console.log('The number of octets are:'+n);

var buf1 = Buffer.from('wow');
var buf2= Buffer.from('hello');
var buf3 = Buffer.concat([buf1,buf2],5);
console.log("The contents are " + buf3.toString());

var buffer1 = Buffer.from('ABCD');
var buffer2 = Buffer.from('ABcD');
var result = buffer1.compare(buffer2);
if(result === 0)
{
console.log(buffer1+"is equal to "+ buffer2);
}
else
{
console.log(buffer1+"is not equal to"+ buffer2);
}

var buffer1 = Buffer.from('This is Nodejs');
var buffer2 = Buffer.alloc(10);
buffer1.copy(buffer2,4,4,10);
console.log("buffer2 content: " + buffer2.toString());
*/