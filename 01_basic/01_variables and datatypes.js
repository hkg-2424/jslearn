let username='harsh';
var userid='kumar';
const billno=39;

// const cannot be changed through out the program

// var is not used because of issues in functional and  block scopes
let length;
console.log(typeof"harshkumar")
console.log(typeof length);
length=90;
console.log(typeof length);
console.log(typeof null);
console.log(typeof true)

console.log(typeof []);
console.table([length,billno,userid,username]);
//null is a standalone value representation of empty value

// example if server wants to give temperature what if it is unable to give then it will send null value instead of 0 (because of 0 is also a value)


// however type of null is object and type of undefined is undefined (an error of js)