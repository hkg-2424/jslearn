//datatypes are divided into two types primitive and non-primitive

// this categorization is based on how data is stored and passed on i.e. by value or by reference


//primitive(these are passed by value):strings ,number,boolean,null,undefined,symbol,bigint

const num=100;
const str='abc';
const isloggedin=true;
const temperature=null;
const youth=undefined;
const bignumber=123456789789456123n// adding n at the end lets javascript treat number as bigint
console.log(typeof bignumber);


const id=Symbol("123");
const anotherid=Symbol("123");
console.log(typeof anotherid);
//symbol is used to create unique things

console.log(id==anotherid);
console.log(id===anotherid);


// non primitive(references)

// objects,functions,array

const heroes=['shaktimaan','nagraaj','batman'];

let myobj={
    name:"harskumar",
    age:'20'
}
console.log(typeof myobj.age);

const myfunc=function(){
    console.log('hello world\n');
}

myfunc();


