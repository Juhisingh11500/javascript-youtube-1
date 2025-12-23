//this and arrow function

let user = {
    name:"juhi",
    age: 24,
    welcomemessage:function(){
        console.log(`${this.name} , welcome to website`);
        //this current context ko reffer karta h
        console.log(this);//{ name: 'juhi', age: 24, welcomemessage: [Function: welcomemessage] }
        
    }
}
//user.welcomemessage()//juhi , welcome to website
//user.name = "tiku"
//user.welcomemessage()//tiku , welcome to website

//console.log(this);//{} 
//node enviroment me this means {} but in browser this means window and browser me global object window object h

// function one(){
//     let username = "juhi"
// console.log(this);
// console.log(this.username);//undefined

// }
// one()

// let one = function (){
//    let username = "juhi"
//  console.log(this);
// console.log(this.username);//undefined

// }
// one()
//both are same normal fn; me this se bahut sare properties milti h

// let one = () => {
//     let username ="juhi"
//     console.log(this);//{}
//     console.log(this.username);//undefined
// }
// one()
//in arrow function this se empty object milta h so i have  no acess of properties

//() => {}//basic arrow function

// let addtwo = (num1,num2) => {//this is explicite return
//     return num1 + num2
// }
// addtwo(3,7)
// console.log(addtwo(3,7));//10

// let addtwo = (num1,num2) => { num1 + num2}//if we use {}then use return keyword
// addtwo(3,7)
// console.log(addtwo(3,7));//undefined

// let addtwo = (num1,num2) => num1 + num2//implicite return
// addtwo(3,7)
// console.log(addtwo(3,7));//10

// let addtwo = (num1,num2) => (num1 + num2)//implicite return
// addtwo(3,7)
// console.log(addtwo(3,7));//10

// let addtwo = (num1,num2) => {username: "juhi"}
// console.log(addtwo(2,5));//undefined

let addtwo = (num1,num2) => ({username: "juhi"})
console.log(addtwo(2,5));//{ username: 'juhi' }
//hum object ko direct {}me retun nhi kar sakte uske liye()use karna hoga

let myarr =[5,6,8,9,0,7]
// myarr.forEach(() => {})
// myarr.forEach(() => ())
// myarr.forEach(function() {})
//all are correct syntex