// Data types of JavaScript summary

/* data are two types
   on the basis of how to store data and acess data
   on the difference of call by value and call by refference
1. primitive type datatypes// single value and immutable hote hain
   7 types
   string, number ,boolean , bigInt ,symbol ,null , undefined // call by value 
   when we call this type data not give the original refference, give the copy of the data

   let score = 100
   let markes = true 
   let scoreValue = 100.3
  
   let userEmail;*/
   //let id = Symbol('123')
   //let anotherId = Symbol('123')

   //console.log(id === anotherId);//false
   let bignumber = 55555555555555555666n
   let outSideTemp = null
   
   //not define the datatype in js 
   /*so it is Dynimically type language

   const score:number = 100 //strictly type


2. non primitive / reference type // multiple values /structure rakhte hain aur mutable hote hain
   in the memory direct reference is allowcated
   Array , Object ,Functions */

   const heros = ["shaktiman", "naagraj","doga"]

  let myobj = {
    name: "juhi",
    age: 26,
   }

   const myfunction = function() {
    console.log("Hello World");
   }
   myfunction();

   console.log(typeof bignumber);//bigint
   console.log(typeof outSideTemp);//object
   console.log(typeof myfunction);//object function
   console.log(typeof myobj);//object
   console.log(typeof heros);//object
   
// javascript has 7 primitive and 3 main referece  datatypes.