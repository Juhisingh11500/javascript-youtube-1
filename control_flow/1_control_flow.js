//control flow in javascript / logic flow
// One-Line Summary****
// Control flow decide karta hai code ka execution path

//1️⃣ Conditional Statements
//if*************

let isuserloggedin = true
if (isuserloggedin) {
    //console.log(`user is logged in`);
}

// if (false) {
// //iss pure scope ka code nhi execute hoga
// }

// Comparison Operators (🔥 Interview Important)
5 == "5";   // true  (value only)
5 === "5";  // false (value + type)
5 != "5";   // false
5 !== "5";  // true
5 > 3;      // true
5 <= 5;     // true
7 < 9;      //false
5 >= 3;     //true

//if...else************
// let tempreture = 65
// if (tempreture >= 75) {
//     console.log(`tempreture is less than 75`);
// }else{
//      console.log(`tempreture is more than 75`);
// }

//console.log(`greter than 75`);//always execute out of scope

// else if***********
// let score = 85;

// if (score >= 90) {
//   console.log("A grade");
// } else if (score >= 75) {
//   console.log("B grade");
// } else {
//   console.log("C grade");
// }

let score = 200
if (score > 100) {
    // let power = "fly"
    //var power = "fly"
   // console.log(`user power: ${power}`);
}

//console.log(`user power: ${power}`);//ReferenceError: power is not defined
//if we use var then power acess out of if scope

//short hand notetion
//if (3 === 3) console.log("juhi");//juhi
//if (3 === 3) console.log("juhi") , console.log("tiku");//not good practice

//Logical Operators**********
//true && false; // false
//true || false; // true
//!true;         // false

let userloggedin = true
let debitcard = true
let fromgoogle = true
let fromemail = false

// if (userloggedin && debitcard && 2==2 && 3 === 3) {//both are true// & => empercent
//     console.log(`allow to buy course`);
// }

// if (fromemail || fromgoogle) {//koi ek condition true ho
//     console.log("user loggedin");
// }

//switch Statement***********
//let day = "fri";

/*switch (day) {
  case "mon":
    console.log("Monday");
    break;
  case "tue":
    console.log("Tuesday");
    break;
  case "wed":
    console.log("wednesday");
    break;
  default:
    console.log("Invalid");
    break;//exceptional last
}*/

//⚠️ break bhool gaye → fall-through / means if we not use break then after true condition 
//all code are executed  default v 
//Fall-through means:
//switch me break na hone par next cases automatically execute ho jana

// Truthy & Falsy (Interview Favorite 🔥)*********

//❌ Falsy values://assume
//false, 0,-0, BigInt 0n, "", null, undefined, NaN

//✔️ Truthy:
//"0","false"," ",[],{},function(){} //surprise value
//All other values
//if ("hello") {
//  console.log("Runs");
//}

// let useremail = "j@gmail.ai"
// if (useremail) {
//     console.log("got user email");
// }else{
//     console.log("don't have user email");
// }

// let useremail = ""//" is assume falsy value
// if (useremail) {
//     console.log("got user email");
// }else{
//     console.log("don't have user email");//don't have user email
// }

// let arr = []
// if (arr.length === 0) {
//     console.log("array is empty");
// }

// let obj = {}
// if (Object.keys(obj).length === 0) {
//     console.log("object is empty");
// }

// false == 0//true
// false == ""//true
// "" == 0//true

// Nullish Coalescing operator (??)******//null and undefined
// let name = null;
// let result = name ?? "Guest";
 
// let val1;
// val1 = 8 ?? 9
// console.log(val1);//8

// let val2 = null ?? 9
// let val2 = undefined ?? 9
// let val2 = undefined ?? 9 ?? 10
// console.log(val2);//9

//👉 null / undefined ke liye kaam karta hai (not for 0, "")


//Ternary Operator (?:)************
condition ? true : false
// let age = 18;
// let result = age >= 18 ? "Adult" : "Minor";
// console.log(result);

//✔️ Short form of if...else