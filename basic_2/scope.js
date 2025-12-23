//global and local scope

//{}//scope

//console.log(a);//ReferenceError: Cannot access 'a' before initialization
//console.log(b);//undefined
//console.log(c)//ReferenceError: Cannot access 'c' before initialization
//let a =5
//var b = 7
//const c = 6

//console.log(a);//5
//console.log(b);//7
//console.log(c);//6
var b = 300
let a = 8
if (true) {
    let a =5
    var b = 7
    const c = 6
   // console.log("inner", a);//5
    
}
//console.log(a);//ReferenceError: a is not defined
//console.log(b);//7
//console.log(c);//ReferenceError: c is not defined
//console.log(b);//7
//console.log(a);//8

for (let i = 0; i < 6; i++) {
   //console.log(i);//0 1 2 3 4 5
}
//console.log(i);//ReferenceError: i is not defined
//browser me scope alag hai aur code enviroment me scope alag h

//*********** scope level and mini hosting****************

function one() {
    let username = "juhi"

    function two() {
        let website ="youtube"
        //console.log(username);//juhi
    }
    //console.log(website);//ReferenceError: website is not defined
    two()
}
one()

if (true) {
    let username = "tiku"
    if (true) {
        let age = 1
        //console.log(`name is ${username} age is ${age} year`);
    }
    //console.log(age);//ReferenceError: age is not defined
} 
    //console.log(username);//ReferenceError: username is not defined
    
//*********** interesting **************
let total = addone(7)
function addone(num) {
    return num + 1
}
console.log(total);//8

//let total = addone(7)
//console.log(total);//8

console.log(addtwo(5));//ReferenceError: Cannot access 'addtwo' before initialization
let addtwo = function (num) {
    //when we store a funtion in a variable then it is called expretion
    return num + 2
}

//addtwo(5)
//console.log(addtwo(5));//7

//function ke declaration pe depend karta h ki hum usse acess kar pate h ya nhi before initilisation 