//function with object and array

//how many argument come
function calCartPrice(num) {
    return num
}
//console.log(calCartPrice(500));//500
//console.log(calCartPrice(500,789,999));//500

function calCartPrice(...num) { //... rest operator
    //return ...num  X
    return num
}
//console.log(calCartPrice(500,789,999));//[ 500, 789, 999 ]

function calCartPrice(val1,val2,...num) { 
    return num
}
//console.log(calCartPrice(555,777,987,678,999,8999,8765));//[ 987, 678, 999, 8999, 8765 ] ...num me value gye

let user = {
    username: "juhi",
    age: 25,
    price: 500
}//username is juhi,age is25
function handelobj(anyobj) {
    console.log(`username is ${anyobj.username},age is ${anyobj.age}`);
}
// handelobj(user)
handelobj({
    username: "tiku",
    age:1
})//username is tiku,age is 1

let myarr = [200,789,900,800,765,456,435]
function returnsecondval(getarr){
return getarr[2]
}
//console.log(returnsecondval(myarr));//900
console.log(returnsecondval([7,8,9,80,98,7,6,4]));//9
