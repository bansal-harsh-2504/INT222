//29-1-24

/*
function countDown(fromNumber){
    console.log(fromNumber);
    let intervalId = setInterval(function(){
        fromNumber--;
        if(fromNumber > 0){
            console.log(fromNumber);
        }else{
            console.log('End');
            clearInterval(intervalId);
        }
    }, 1000);
}
countDown(3);
*/

//My solution
/*
let num = prompt("Enter a number: ");
let i = 1;
function printTable(){
    console.log(`${num} * ${i} = ${num * i}`);
    i++;
    if(i==11){
        clearInterval(interval);
    }
}
let interval = setInterval(printTable, 1000);
*/

//sir's solution
/*
const readline = require("readline");
const a = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

a.question("Enter a number: ", (userInput)=>{
    const num = parseFloat(userInput);
    if(!isNaN(num)){
        console.log('Your value: ', (userInput));
    }
    else{
        console.log("Invalid Input value");
    }
    a.close();
});
*/

const x = ['a', 'b', 'c', null, true,,10.8, undefined];
for(y of x){
    console.log(y);
}

/*
var event = require("events");
var myEmitter = new event.EventEmitter();
myEmitter.addListener('anEvent', function(msg){
    console.log(msg);
});

myEmitter.emit('anEvent', 'Event emitted');
*/


//readline
//nodejs
//forEach