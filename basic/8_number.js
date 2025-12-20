//number and math in javascript

//numbers

const score = 100//100

const balance = new Number(876)
const balance1 = new String("juhi")
/*console.log(balance);//[Number: 876]
console.log(balance1);//[String: 'juhi']
console.log(balance.toString());
console.log(balance.toFixed(2));//876.00
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER); */


const othername =45.87654

console.log(othername.toPrecision(3));

const hundreds = 10000000
//console.log(hundreds.toLocaleString());//10,000,000
//console.log(hundreds.toLocaleString('en-IN'));//1,00,00,000

//********************maths*******************

//maths library comes with javascript by default

//console.log(Math.PI);
//console.log(Math);//Object [Math] {}
//console.log(Math.abs(-8));//only convert - to + //8
//console.log(Math.round(6.88));//7
//console.log(Math.ceil(6.2));//7
//console.log(Math.floor(6.9));//6
//console.log(Math.sqrt(36));//6
//console.log(Math.pow(6,2));//36
//console.log(Math.min(6,2,8,9,1,0,8));//0
//console.log(Math.max(6,2,9,7,5,3));//9

console.log(Math.random());//0 to 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max - min + 1) + min));



