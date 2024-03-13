// const writeStream = fs.createWriteStream('output.txt');

// writeStream.write("My ");
// writeStream.write("name is ");
// writeStream.write("Harsh");
// writeStream.end();
// writeStream.on('finish', ()=>{
//     console.log("Data has been written to the file.");
// })
// writeStream.on('error', (err)=>{
//     console.log("Error writing to the file: ", err);
// })


// var compressed = zlib.deflate(input);
// var output = zlib.inflate(compressedData);


const fs = require('fs');
const zlib = require('zlib');

const input = 'Hello, world!';

zlib.deflate(input, (err, buffer) => {
    if(!err){
        console.log('Compressed Data: ', buffer.toString('base64'));
    }
});

var compressedData = Buffer.from('eJzzSM3JyddRKM8vyklRBAAgXgSK', 'base64');
zlib.inflate(compressedData, (err, buffer) => {
    if(!err){
        console.log('Decompressed Data: ', buffer.toString());
    }
});