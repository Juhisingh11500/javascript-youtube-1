//string in js

const name = "juhi";
/*console.log(name.length);
console.log(name.toUpperCase());
console.log(name.charAt(2));
console.log(name.indexOf("j"));*/ 
//all method and properties are worked  both type of string declearation.

//console.log(typeof name)//string
const repoCount = 45;
//console.log(name + repoCount + " value");//juhi45 value
//string interpoletion(``)
//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//string declear other method

const gameName = new String('juhiSingh')
const gameName1 =  String('juhiSingh')
//console.log(typeof gameName);//object
//console.log(typeof gameName1);//string

/*console.log(gameName[3]);
console.log(gameName.__proto__);//{} best option to acess in console of browser
console.log(gameName.length);
console.log(gameName.toUpperCase);//[Function: toUpperCase]
console.log(gameName.toUpperCase());
console.log(gameName.includes("S"));//case sensitive
console.log(gameName.charAt(5));
console.log(gameName.indexOf("h")); */

const newstr = name.substring(0,3)//it ignores the negative value and stat from 0
const newstr1 = gameName1.substring(2,5)//not add last number
const newstr2 = gameName.substring(1,6)
/*console.log(newstr);
console.log(newstr1);
console.log(newstr2);
console.log(gameName);//[String: 'juhiSingh']
console.log(gameName1);//juhiSingh
console.log(name);//juhi */

const anotherstr = gameName.slice(0,4)//it takes negative value
//const anotherstr1 = gameName.slice(0,-2)//juhiSin
// jitna negative number hota h utna last se character ko chhor deta h
//const anotherstr1 = gameName.slice(-8,5)//uhiS
//const anotherstr1 = gameName.slice(-7,5)//hiS
//counting is stat from last -1 to number which given
//console.log(anotherstr);
const anotherstr1 = gameName.slice(-7,-5)//hi
//console.log(anotherstr1);
const game =" cricket candyCresh   "
const newStrOne = game.trim()//cricket candyCresh
//before and after white space remove
//console.log(newStrOne);
//console.log(game);

const url = "juhi.com/juhi%20singh"
//console.log(url.replace('%20','-'));
//console.log(url.includes("juhi"));
//console.log(url.includes('kumari'));

const fullName = "juhi-singh-kumari"
console.log(fullName.split('-'));
