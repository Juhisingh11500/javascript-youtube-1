//function

function saymyname(){
console.log("j");
console.log("u");
console.log("h");
console.log("i");
console.log("s");
console.log("i");
console.log("n");
console.log("g");
console.log("h");
}
//function definetion

//saymyname//function refference
//saymyname()//invoke the fn;/execution

// function addTwoNumbers(num1,num2) { //perameters
//     console.log(num1 + num2);
// }
// //addTwoNumbers()//nan
// //addTwoNumbers(8,9)//17 //arguments
// let result = addTwoNumbers(8,9);
// console.log(result);//undefined because fn; not retun value only print consle value

 function addTwoNumbers(num1,num2) { //perameters
    //  let result1 = num1 + num2;
    //  return result1
    //console.log("juhi");//not work code after return
    return num1 + num2//as same
}
let result = addTwoNumbers(6,4);
//console.log(result);//10

// function loginUserMessage(user) {
//     return`${user} just logged in`
// }
//console.log(loginUserMessage("juhi"));//juhi just logged in
//console.log(loginUserMessage(""));// just logged in
//console.log(loginUserMessage());// undefined just logged in
// function loginUserMessage(user) {
//     if(user === undefined){
//         console.log("please enter a user name");
//     }
//     return`${user} just logged in`
// }
// console.log(loginUserMessage());//please enter a user name
// //undefined just logged in
function loginUserMessage(user) {
    if(user === undefined){
        console.log("please enter a user name");
        return
    }
    return`${user} just logged in`
}
//console.log(loginUserMessage());//please enter a user name
//undefined
function loginUserMessage(user) {
     if(!user){
        console.log("please enter a user name");
        return
    }
     return`${user} just logged in`
}

//console.log(loginUserMessage());// please enter a user name
//undefined

 function loginUserMessage(user = "juhi") {
     return`${user} just logged in`
}
console.log(loginUserMessage());//juhi just logged in
console.log(loginUserMessage("tiku"));//tiku just logged in
//over right 