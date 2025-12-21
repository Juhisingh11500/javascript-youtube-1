//array

const myarr =[1,2,4,8,9]
const myarr1 =[0,2,6,8,7]
// myarr.push(myarr1);
//console.log(myarr.push(myarr1));//7  X

//console.log(myarr);//[ 1, 2, 4, 8, 9, [ 0, 2, 6, 8, 7 ] ]
//console.log(myarr[5][3]);

// myarr.concat(myarr1)
// console.log(myarr);//[ 1, 2, 4, 8, 9 ]
// let newarr = myarr.concat(myarr1)//return new array not change in exiting array
// console.log(newarr);//[1, 2, 4, 8, 9, 0, 2, 6, 8, 7]
// console.log(myarr);
// console.log(myarr1);

//spreade method
const allnumbers = [...myarr,...myarr1]
//console.log(allnumbers);//[1, 2, 4, 8, 9, 0, 2, 6, 8, 7]

let anotherarr = [0,9,8,7,6,[6,8,8,9],8,[2,1,3,4,[3,2,8,0]]]
let  realarr = anotherarr.flat(1)//starting from 0
let  realarr1 = anotherarr.flat(Infinity)//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
//console.log(realarr);
//console.log(realarr1);


Array.isArray("juhi")
//console.log(Array.isArray("juhi"));//false
//console.log(Array.from("juhi"));//Creates an array from an iterable object.
//[ 'j', 'u', 'h', 'i' ]

//console.log(Array.from({name: "juhi"}))//[] verifyy that key or value converted into array other wise[array retuns]

let scr1 = 100
let scr2 = 200
let scr3 = 300
console.log(Array.of(scr1,scr2,scr3));//A set of elements to include in the new array object.
//Returns a new array from a set of elements.
//console.log(Array.from(scr1,scr2,scr3));//TypeError: number 200 is not a function
console.log(Array.from(scr1));//[]
console.log(Array.from(199));//[]
