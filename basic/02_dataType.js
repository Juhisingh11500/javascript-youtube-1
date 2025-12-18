

//datatype conversion confusion

//let score = 74
/* let score = "44"
// let age = 14a //SyntaxError: Invalid or unexpected token
let age = "18a"
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof (valueInNumber)); */


/* let valueInNumber1 = Number(age)
console.log(typeof (valueInNumber1));
console.log(valueInNumber1);//NaN */

/* let score1 = null
let valueInNumber01 = Number(score1)
console.log(typeof (valueInNumber01));
console.log(valueInNumber01);// 0 */

/* let score2 = undefined
let valueInNumber02 = Number(score2)
console.log(typeof (valueInNumber02));
console.log(valueInNumber02); //NaN */

/*let score3 = true
let valueInNumber03 = Number(score3)
console.log(typeof (valueInNumber03));
console.log(valueInNumber03); //1, if false it gets 0 */

// "33" => 33
// "33a" => NaN
// true => 1; false => 0;

/* let isLoggedIn = 1
let bolleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof bolleanIsLoggedIn);
console.log(bolleanIsLoggedIn); */ // true

/* let isLoggedIn = "juhi"
let bolleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof bolleanIsLoggedIn);
console.log(bolleanIsLoggedIn); */ //true

/*let isLoggedIn = ""
let bolleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof bolleanIsLoggedIn);
console.log(bolleanIsLoggedIn);*/ //false

/* let isLoggedIn = undefined
let bolleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof bolleanIsLoggedIn);
console.log(bolleanIsLoggedIn);*/ //false
 
/* let isLoggedIn = 0
let bolleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof bolleanIsLoggedIn);
console.log(bolleanIsLoggedIn);*/ //false

/* let isLoggedIn = 33
let bolleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof bolleanIsLoggedIn);
console.log(bolleanIsLoggedIn);*/ //true

/* let isLoggedIn = null
let bolleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof bolleanIsLoggedIn);
console.log(bolleanIsLoggedIn);*/ // false

//1 => true , 0 => false , 44 => true ,
//"" => false , "juhi" => true , null => false , undefined => false 

let someNumber = 55
let strSomeNumber = String(someNumber)
console.log(typeof strSomeNumber);
console.log(strSomeNumber);

