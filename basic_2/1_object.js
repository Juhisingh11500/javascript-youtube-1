//object

//singleton/constructor se banega to singleton banega
//Object.create

// object literals 

let mysym = Symbol("key1")
let jsuser = {
    name: "juhi",
    "full name": "juhiSingh",
    //mysym: "mykey1",//not symbol
    [mysym]: "mykey1",//Here mySymbol is not a string key, it is a Symbol key.
    age: 25,
    isLoggedIn: true,
    location: "Bihar",
    lastLoggingDays: ["mon","sun","thr"]
}
//keys always treat as string
//value are any data types

// console.log(jsuser.age);
//console.log(jsuser[name]);//ReferenceError: name is not defined
//console.log(jsuser["name"]);//juhi

//console.log(jsuser.full name);//X
//console.log(jsuser."full name");//SyntaxError: Unexpected string
//console.log(jsuser["full name"]);//juhiSingh
//console.log(jsuser.mysym);//mykey1
//console.log(typeof jsuser.mysym);//string
//console.log(typeof jsuser.age);//number

console.log(typeof jsuser[mysym]);//string
console.log(jsuser[mysym]);//mykey1
console.log(jsuser.mysym);//undefined

//[mySym]: "mykey1" has a symbol key and a string value.

jsuser.age = 26;
console.log(jsuser.age);//26
//Object.freeze(jsuser)
jsuser.age = 21;
console.log(jsuser.age);//26
console.log(jsuser);

jsuser.greeting = function(){
    console.log("hello world");
}

//console.log(jsuser.greeting());//hello world
//console.log(jsuser.greeting);//[Function (anonymous)]
jsuser.greetingTwo = function(){
    console.log(`hello js user , ${this.name}`);
}
console.log(jsuser.greetingTwo());
