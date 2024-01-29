//24-1-24

// const express = require("express");
// const app = express();

// app.listen(8080, ()=>{
//     console.log("listening to port 8080");
// });

// app.use("/", (req, res)=>{
//     res.send("Working");
// });

// var x = 19336765635465767987665432;
// console.log(x); 
// console.log(typeof(x)); //number

// var x = 19336765635465767987665432n;
// console.log(x);
// console.log(typeof(x)); //bigint


// const fs = require("fs");
// // fs.writeFileSync("file.txt", "Hi there..");
// fs.appendFileSync("file.txt", "content");

// function countDown(fromNumber){
//     console.log(fromNumber);
//     let nextNumber = fromNumber - 1;
//     if(nextNumber > 0){
//         setTimeout(countDown, 1000, nextNumber);
//     }
// }
// countDown(3);

function welcome(){
    console.log("Welcome to Timer code set Time out");
}
function welcome1(){
    console.log("I am set Interval");
}
function welcome2(){
    console.log("I am set Immediate");
}
var id1 = setTimeout(welcome, 5000);
var id2 = setInterval(welcome1, 2000);
var id3 = setImmediate(welcome2);
clearTimeout(id1);
clearInterval(id2);