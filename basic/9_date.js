//date and time

let mydate = new Date()
/*console.log(mydate);//2025-12-20T09:18:15.479Z
console.log(mydate.toString());//Sat Dec 20 2025 09:27:13 GMT+0000 (Coordinated Universal Time)
console.log(mydate.toDateString());//Sat Dec 20 2025
console.log(mydate.toLocaleDateString());//12/20/2025
console.log(mydate.toTimeString());//09:27:13 GMT+0000 (Coordinated Universal Time)
console.log(mydate.toLocaleTimeString());//9:27:13 AM
console.log(mydate.toISOString());//2025-12-20T09:27:13.684Z
console.log(mydate.toJSON());//2025-12-20T09:27:13.684Z
console.log(mydate.toUTCString());//Sat, 20 Dec 2025 09:27:13 GMT
let myda = Date()
console.log(myda);//Sat Dec 20 2025 09:18:15 GMT+0000 (Coordinated Universal Time)
console.log(typeof mydate);//object
console.log(typeof myda);//string */

let mycreateDate = new Date(2025,0,21)
let mycreateDate1 = new Date(2025,0,21,12,45,55,66)
//console.log(mycreateDate);//2025-01-21T00:00:00.000Z
//console.log(mycreateDate1.toLocaleDateString());//1/21/2025
//console.log(mycreateDate1);//2025-01-21T12:45:55.066Z
let mycreateDate2 = new Date("2025-01-06")
let mycreateDate3 = new Date("09-11-2025")
console.log(mycreateDate3.toLocaleString());//9/11/2025, 12:00:00 AM


//console.log(mycreateDate2.toLocaleString());//1/6/2025, 12:00:00 AM

/*let myda = Date("2025-07-21")
console.log(typeof myda);

console.log(myda);
console.log(myda.length); */
console.log(Date());

let myTimeStamp =Date.now()
//console.log(myTimeStamp);//1766225877040
//console.log(mycreateDate3.getTime());//1757548800000

//console.log( Date.now());
//console.log( Date.now()/1000);
//console.log( Math.floor (Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getTime());
console.log(newDate.getMonth());
console.log(newDate.getMonth() + 1);
console.log(newDate.getUTCDate());
console.log(newDate.getFullYear());

/*newDate.toLocaleString('default',{
    weekday:"long",
    timeZone:"+5:30"
}) */
//khud se hum date ko modified kar sakte h
