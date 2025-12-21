//array

let myarr = [0,1,2,3,4,5,6,7]// all type of data in element
//arrays are resizeable
//indexing stat 0
//arrays copy operation create sallow copies :share the same refference point
//in array prototype access milta hai
//console.log(myarr[3]);
//console.log(myarr"one");X
//console.log(typeof myarr);//object

let heros = ["saktiman","naagraj"]

let mynewarr = new Array (1,2,3,4,5,9)
//console.log(mynewarr);
//console.log(typeof mynewarr);//object
//console.log(mynewarr.length);

//array methods

//mynewarr.push(5)//[1, 2, 3, 4, 5, 9, 5]  last me add
//mynewarr.pop();//[1, 2, 3, 4, 5, 9]  last se remove

//mynewarr.unshift(7)//[7, 1, 2, 3, 4, 5, 9] add in start
//mynewarr.shift()//[1, 2, 3, 4, 5, 9] remove from start

//console.log(mynewarr.includes(3));//true
//console.log(mynewarr.indexOf(8));//-1
//console.log(mynewarr.indexOf(9));//5

// let newarr = mynewarr.join()
// console.log(newarr);//1,2,3,4,5,9
// console.log(typeof newarr);//string

// console.log(mynewarr);//[ 1, 2, 3, 4, 5, 9 ]

//slice , splice

console.log("A", mynewarr);//A [ 1, 2, 3, 4, 5, 9 ]
let myn1 = mynewarr.slice(2,5)//not include last index
console.log(myn1);//[ 3, 4, 5 ]
console.log("B", mynewarr);//B [ 1, 2, 3, 4, 5, 9 ]

let myn2 = mynewarr.splice(2,5)//include last index
console.log(myn2);//[ 3, 4, 5, 9 ]
console.log("C", mynewarr);//C [ 1, 2 ]

//defference between slice aand splice 
//slice is  not include last range and not change in original array
//splice os include last range and manuplate in original array and return new array of remaining element