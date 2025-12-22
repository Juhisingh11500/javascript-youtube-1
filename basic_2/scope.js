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
    console.log("inner", a);//5
    
}
//console.log(a);//ReferenceError: a is not defined
//console.log(b);//7
//console.log(c);//ReferenceError: c is not defined
//console.log(b);//7
//console.log(a);//8

for (let i = 0; i < 6; i++) {
   console.log(i);//0 1 2 3 4 5
}
//console.log(i);//ReferenceError: i is not defined
//browser me scope alag hai aur code enviroment me scope alag h