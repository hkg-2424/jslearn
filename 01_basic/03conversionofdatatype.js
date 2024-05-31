let score="33";
console.log(typeof score);
console.log(typeof(score));
// now to covert this score string to number we use Number() function

let scoreinstring=Number(score);
console.log(typeof scoreinstring);
console.log(typeof Number(score));

// however javascript has some issue in conversion that's why people use typescript

score='33abc';
scoreinstring=Number(score);
console.log(scoreinstring);// this will throw error as not in number hence remember not to rely completely on this
console.log(typeof(scoreinstring));

console.log(Number(null));

// boolean true is converted into 1 and false to 0 
// unconvertable string is converted into NaN   
console.log(Number(undefined));


// Number('33')=33
//Number('33abc')=>NaN however type of NaN is number
//true=1;false=0;


let isloggedin="harsh";
let boolisloggedin=Boolean(isloggedin);
console.log(boolisloggedin);
console.log(typeof boolisloggedin);


// so Boolean('')=false;
// so Boolean('notempty')=true;
// and 1=true and 0=false

//similarly strings can be converted using String

