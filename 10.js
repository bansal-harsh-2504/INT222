var buffer1 = Buffer.from('Thisat is Nodejs');
var buffer2 = Buffer.alloc(10);
buffer1.copy(buffer2,0,4,20);
console.log("buffer2: " , buffer2);
console.log("buffer2 content: " + buffer2.toString());

const buf1 = Buffer.alloc(26).fill('aquickbrownfoxjumpsoverthelazydog');
const buf2 = Buffer.alloc(26).fill('0');
buf1.copy(buf2, 8, 1, 6);
console.log(buf2.toString());

