//higer order array loop

// for of***********

//Array / String ke values par loop.
//✔ value milti hai
//❌ index nahi
// ["","",""]
// [{},{},{}]

// let myarr = ["juhi","mantu","sittu","tiku"]

// for (const val of myarr) {
//     console.log(val);
// }

let grretings = "hello world"
for (const greet of grretings) {
    //console.log(greet);
}

//Map (Data Type)
//👉 Jab key–value pair chahiye ho aur key kisi bhi type ki ho
//it is unique in the map's collection

const map = new Map()
map.set("IN","india")
map.set("USA","America")
map.set("JN","Japan")
map.set("NP","Nepal")
map.set("IN","india")//X only one times

//console.log(map);//Map(4) {
//   'IN' => 'india',
//   'USA' => 'America',
//   'JN' => 'Japan',
//   'NP' => 'Nepal'
// }

for (const val of map) {
   // console.log(val);
    //[ 'IN', 'india' ]
    //[ 'USA', 'America' ]
    //[ 'JN', 'Japan' ]
    //[ 'NP', 'Nepal' ]
}
for (const [key,val] of map) {
    //console.log(key, val);
    //IN india
    //USA America
    //JN Japan
    //NP Nepal
}

let myobj = {
    name: "juhi",
    age:24,
    location:"katihar"
}
//  for (const val of myobj) {
//     // console.log[val];//TypeError: myobj is not iterable
//  }
// for (const [key,val] of map) {
//     //console.log(key, val);//TypeError: myobj is not iterable
// }

//for in
//Object ke keys par loop.
//✔ keys milti hain

// for (const key in myobj){
//     console.log(key);//name,age,locationr
// }

// for (const key in myobj){
//     const element = myobj[key];
//     console.log(element);//juhi,24,katihar
// }

let myarr = [1,3,7,0,7]
for (const key in myarr) {
    //console.log(key);//0,1,2,3,4
    //console.log(myarr[key]);//1,3,7,0,7
}
for (const key in map) {
    //console.log(key);//for...in object ke liye hota hai, Map iterable hota hai isliye Map//par for...of ya forEach use karte hain.
}

//for each loop
//Callback function ke sath use hota hai.
//❌ break / continue kaam nahi karta
//it is higher order function
//Callback function wo function hota hai jo dusre function ko argument ke roop me pass hota hai aur baad me execute hota hai.
//Callback parameters ka order hota hai:
//(value, index, array)

let coding = ["js","ruby","java","python","cpp"]
// coding.forEach(function(item){//yanha function ke name nhi hote h
// console.log(item);
// } )

// coding.forEach( (val) => {
//     console.log(val);
// })

coding.forEach((val,idx,arr) =>{
    //console.log(`val is ${val}, index is ${idx}, array is ${arr}`);
    //val is js, index is 0, array is js,ruby,java,python,cpp
    //👉 Note: ${arr} string me convert ho jata hai → 10,20,30
    //console.log(`array is ${JSON.stringify(arr)}`);
    //array is ["js","ruby","java","python","cpp"]
   // console.log(val,idx,arr);
    //js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
})

function printme(val) {
    //console.log(val);
}
coding.forEach(printme)//give only refference

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

mycoding.forEach( (item) => {
// console.log(item.age);
// console.log(item.name);
// console.log(item.marks);
})