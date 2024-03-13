//12-2-24

const x = [1, 2, 3, 4, 5];
const [y, ...z] = x;
console.log(y); // 1
console.log(z); // 2

const sub = Array('JavaScript', 'Node js', 'React js');
console.log(sub.length);
sub[3] = 'Angular js';
const books = ['Java', 'Python'];
x.concat(sub, books);
console.log(x);
console.log(x.concat(sub, books));

let numbers = [1, 2, 3, 4, 5];
const isEven = (num) => num % 2 === 0;
numbers = numbers.filter(isEven);
console.log(numbers);