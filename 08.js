const event = require('events');
let myEmitter = new event.EventEmitter();

myEmitter.on('event1', function(data) {
    console.log("This is the first time we are hearing about this: 1 " + data);
});
myEmitter.once('event2', function(data) {
    console.log("This is the first time we are hearing about this: 2 " + data);
});
myEmitter.addListener('event3', function(data) {
    console.log("This is the first time we are hearing about this: 3 " + data);
});
// Will execute when 'event2' fires for the second time
myEmitter.emit('event3', "I am emitter");