//string to number conversion.

//******************** operations***************

let value = 4
let negValue = -value
//console.log(negValue);


/*console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 % 2);
console.log(2 ** 2);
console.log(2 / 2); */

/* let str1 = "hello"
let str2 = " juhi"
let str3 = str1 + str2
console.log(str3); */

/* console.log("2" + 1);//21
console.log(2 + "1");//21
console.log("2" + "2");//22
console.log("2" + "2" + 2);//222
console.log("2" + 2 + "2");//222
console.log("2" + 2 + 2);//222
console.log(2 + 2 + "2");//42 */ //it is very messy code so not in used

//console.log( (3 + 7) * 8 % 2); //good practice which is solve first

//console.log(+true); //1
//console.log(true+); //SyntaxError: Unexpected token ')'
//console.log(+""); //0

/* let num1, num2, num3
num1 = num2 = num3 = 3 + 4 */ //not good practice

let gameCounter = 100
gameCounter++;//postfix 101
++gameCounter;//prefix  101

console.log(gameCounter);//101


//prefix increment(++x)
//pahle value badhata h phir use karta h
let x = 5;
let y = ++x;//new value assigned
console.log(x);//6
console.log(y);//6

//postfix increment (x++)
//pahle value use karta h phir value padhata h
let u = 5;
let v = u++;//old value assigned
console.log(u);//6
console.log(v);//5

let a = 1;
//console.log(a++ + ++a);//1 + 3 = 4
//console.log(a++);
console.log(++a);

//a++ use 1 then a =2
//++a a = 3,use 3