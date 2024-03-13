const fs = require("fs");

// fs.open('Input.txt', 'w', (err)=>{
//     if(err) console.log(err);
//     fs.readFile('Input.txt', (err, data)=>{
//         if(err){
//             console.log(err)
//         }
//         if(data.toString().trim() == ""){
//             console.log("File is empty");
//         }
//         else{ 
//             data=data.toString();
//             console.log(data);
//         }
//     });
// });




// function sum(n){
//     if(n==0)return 0;
//     return  n + sum(n-1);
// }
// console.log(sum(5));

// const name = "Harsh";
// const favColor = "her";
// const intervalId = setInterval(()=>{
//     console.log(`My name is ${name} and my favorite color is ${favColor}`);
// }, 1000);
// setTimeout(() => {
//     clearInterval(intervalId);
// }, 5000);



fs.open('Copy.txt', 'w', (err)=>{
    if(err) throw err;
    fs.writeFile('Copy.txt', "content is witten using writeFile", (err)=>{
        fs.copyFile('Copy.txt', 'Input.txt', (err)=>{});
    });
})


// var event = require('events');
// const { EventEmitter } = require("stream");
// var myEmitter = new event.EventEmitter();

// myEmitter.on('anEvent', (n)=>{
//     console.log(n);
// })
// for(let i = 1; i<=10; i++){
//     myEmitter.emit('anEvent', +i*i);
// }