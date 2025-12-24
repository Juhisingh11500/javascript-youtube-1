//execution code + call stack

//***********javascript execution context ************

//Code Execution Context wo environment hai jahan JavaScript ka code execute hota hai.
//Isme JavaScript engine ye decide karta hai:
//kaun-sa code ab chalega
//variables ka scope kya hoga
//this ki value kya hogi
//“JavaScript code ko chalane ka setup hi execution context hota hai.”


//Execution Context ke types
//any code => globel execution context make
// 🔹 1. Global Execution Context (GEC)
// Sabse pehle automatically create hota hai
// Sirf ek hi hota hai
// Browser me this = window
// Node.js me this = {}

// 🔹 2. Function Execution Context (FEC)
// Jab bhi function call hota hai
// Har function call ke liye naya execution context
// Kaam khatam → context destroy

// 3. Eval Execution Context (rare)
// eval() ke liye
// Real projects me avoid kiya jata hai

// Execution Context ke phases (MOST IMPORTANT)
// Har execution context 2 phases me banta hai 👇

// 🔥 Phase 1: Memory Creation Phase (Creation Phase)
// Is phase me code execute nahi hota, sirf memory allocate hoti hai.
// Is phase me kya hota hai?
// Variables → undefined
// Functions → poora function memory me
// this ki value set hoti hai

// 🔥 Phase 2: Code Execution Phase
// Code line by line execute
// Variables ko actual value milti hai
// Functions call hote hain

let val1 = 2
let val2 = 32
function addnum(num1,num2) {
    let total = num1 + num2
    return total
}
let result1 = addnum(val1,val2)
let result2 = addnum(6,9)
//first create GEP
//memory creation phase
val1 = undefined
val2 = undefined
addnum = {
    let total = num1 + num2
    return total
}//definetion
result1 =undefined
result2 =undefined

//execuetion phase
val1 = 2
val1 = 32
result1 = 34// print and delete execution context
result2 =15
addnum//new executional context created//jitni baar function call hota h utni baar banta h aur delet ho jata h
//new variable enviromnt + execution thread
//memory creation phase
num1 = undefined
num2 = undefined
total = undefined

//again create new ec for other execution of function
//execution phase
num1 = 2
num2 = 32
total = 2+32=34//retun in globel execution context

addnum()
//new variable enviromnt + execution thread
//memory creation phase
num1 = undefined
num2 = undefined
total = undefined

//execution phase
num1 = 6
num2 = 9
total = 6+9=15
//Function finish → context removed

//call stack order

//Socho Call Stack ek stack of plates jaisa hai 🍽️
//➡️ Last In → First Out (LIFO)
Global
one()
two()
three()

//CALL STACK
// ──────────
// | three()|
// | two()  |
// | one()  |
// | Global|
// ──────────
//programme end


//CALL STACK
//(empty)