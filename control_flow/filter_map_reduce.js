//filter, map and reduce
//Ye teen array methods functional programming ka core hain.

//Interview One-Liner
//map data transform karta hai, filter data select karta hai, aur reduce poore array ko ek value me combine karta hai.

//map → API data format karna
//filter → search / active users
//reduce → total price / cart sum

//Situation	Best Loop

//Fixed count	    for
//Condition based	while
//Array values	    for...of
//Object keys	    for...in
//New array chahiye	map()
//Just iteration	forEach()

//for each() method of array

//forEach() hamesha undefined return karta hai
//Iska kaam sirf har element par operation perform karna hota hai
//Chahe return likho, bahar kuch nahi milta

// let coding = ["java","js","python","ruby","cpp"]
// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// })
//console.log(values);//undefined

//method    return

//forEach	❌ undefined
//map	    ✅ new array
//filter	✅ new array
//reduce	✅ single value

//map() – Transform***********
//👉 Har element ko change karke naya array banata hai.
//✔ New array return and ❌ Original array same

// let myarr = [1,9,8,7,6,8,9]
// myarr.map((val) => {
//     console.log(val);
// })
let myarr = [1,9,8,7,6,8,9]
let values = myarr.map( (val) => val + 5)
//console.log(values);//[6, 14, 13, 12, 11, 13, 14]

let arr = []
myarr.forEach((val) => arr.push(val + 5))
//console.log(arr);

let newnums = myarr.map((num) => num * 5)
                   .map((num) => num + 5)
                   .filter((num) => num > 20)
//console.log(newnums);//[ 50, 45, 40, 35, 45, 50 ]
                   .reduce((acc,curr) => {
                    return acc + curr
                   },0)
                   //console.log(newnums);//265
//it is chaining which is apply on first method use
                   
//filter() – Select
//👉 Condition true ho to element select karta hai.
//✔ Condition based selection and ✔ New array return ❌ Original array same

// let selvalues = myarr.filter( (val) => val > 7 )
// console.log(selvalues);//[ 9, 8, 8, 9 ]

// let selvalues = myarr.filter( (val) => {
//     val >= 7
// } )
// console.log(selvalues);//[]

// let selvalues = myarr.filter( (val) => {
//   return  val >= 7
// } )
//console.log(selvalues);//[ 9, 8, 7, 8, 9 ]

//from foreach

// let selvalues = []
// myarr.forEach( (val) => {
// if (val > 7) {
//     selvalues.push(val)
//Yahan hum value return nahi kar rahe,
//hum bahar wale array ko directly modify kar rahe hain.
// }
// })
// console.log(selvalues);//[ 9, 8, 8, 9 ]

let mycoding = [
{
    name: "juhi",
    age: 22,
    marks: 76
},
{
    name: "juhi1",
    age: 12,
    marks: 86
},
{
    name: "juhi3",
    age: 52,
    marks: 36
},
{
    name: "juhi4",
    age: 23,
    marks: 96
},
{
    name: "juhi5",
    age: 25,
    marks: 46
}
]

let adultage = mycoding.filter(item => item.age > 20)
//console.log(adultage);
adultage = mycoding.filter((item) => {return item.marks >= 50 && item.age > 20})
//console.log(adultage);
//console.log(adultage[1].marks);//96

//reduce() – Combine / Accumulate**********
//👉 Pura array ko ek single value me convert karta hai
//(sum, max, object, array kuch bhi)

//reduce Parameters
//(accumulator, currentValue, index, array)

const mynums =[6,8,9,8,5,4]
//  const total = mynums.reduce(function(acc,currval){
//    // console.log(`accumulator is ${acc}, currentvalue is ${currval}.`);
// return acc + currval
//  }, 0)
 //console.log(total);//40

const total = mynums.reduce((acc,crr) => {
 //console.log(`accumulator is ${acc}, currentvalue is ${crr}.`);
    return acc * crr
 },1)
 //console.log(total);
 
 let shoppingcart =[
    {
        itemname: "js course",
        price: 2999
    },
    {
        itemname: "java course",
        price: 999
    },
    {
        itemname: "cpp course",
        price: 1999
    },
    {
        itemname: "python course",
        price: 2999
    }
 ]
 let totalprice = shoppingcart.reduce((acc,item) => acc + item.price ,0)
 //console.log(totalprice);//8996
 