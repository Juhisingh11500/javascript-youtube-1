//Immidiately Invoked Function Expressions (IIFE)
//globel scope se pollution nhi chahiye aur allg scope ho aur immidetly invoke ho jaye

// function chai(){
//     console.log(`DB connected`);
// }
// chai()//DB connected

(function chai(){
    //named iife
    console.log(`DB connected`);
})();
//DB connected
//iife function invoked to gya but isse pata nhi h ki context rokna kanha h
//so use ;

//()()//first me definition and second me exicution
//iife fn; is immideatly executed and globel scope ke pollution se problem hoti h kai baar
//to uss global scope ke jo varible hain uske pollution ko hatane ke liye use kiya h

(() => {
    console.log("juhi");
    
})();//juhi

(function one() {
    console.log("juhi1");
})();//juhi1

//must be use in iife ; context ko close karne ke liye

// ((name) => {
//     console.log(`juhi${name}`);
    
// })(singh);//ReferenceError: singh is not defined

((name) => {
    console.log(`juhi${name}`);
    //juhisingh
})("singh");