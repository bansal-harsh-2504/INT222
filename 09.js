//19-2-24
//Import-Module PSReadLine

// var fs = require("fs");
// fs.readFile('img.txt', function (err, data){
//     if(err) {
//         return console.error(err);
//     }
//     console.log("Asynchronous Read: " + data.toString());
// });


// var fs = require("fs");
// var http = require("http");
// http.createServer(function(req, res){
//     console.log("File is open at localhost:5000");
//     fs.readFile('img.txt', function (err, data){
//         res.write(data);
//         return res.end();
//     })
// }).listen(5000);


// var fs = require("fs");
// fs.appendFile('img.txt', 'Adding new Content using appendFile Method!',
//     function (err){
//         if(err) throw err;
//         console.log('Saved!!!');
// });

// var fs = require("fs");
// fs.writeFile('Input1.txt', 'Content is added!',
// function(err){
//     if(err) throw err;
//     console.log('Content added and Saved!!!');
// });

// var fs = require("fs");
// fs.rename('Input.txt', "Input.txt", function(err){
//     if(err) throw err;
//     console.log("File renamed!");
// })