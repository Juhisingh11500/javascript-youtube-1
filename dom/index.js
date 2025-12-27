//DOM Selector (JavaScript)
// DOM Selector ka use HTML elements ko JavaScript me select (pakadna) ke liye hota hai, taaki hum unpe style, event, content change kar sakein.
// 1. getElementById()
// 👉 ID se element select karta hai

document.getElementById("title")//<h1 id=​"title" class=​"heading">​DOM with chai and code​</h1>​
document.getElementById("title").id//'title'
document.getElementById("title").class//undefined
document.getElementById("title").className//'heading'
document.getElementById("title").getAttribute("class")//'heading'
document.getElementById("title").setAttribute("class","test")//overright previous attribute
document.getElementById("title").setAttribute("class","heading test")//now both are abvilable
let title = document.getElementById("title")
title.style.color = "red"
title.style.fontSize = "35px "
title.textContent//'DOM with chai and code'
title.innerText//'DOM with chai and code'
title.innerHTML//'DOM with chai and code'
let title1 = document.getElementById("title1")
title1.innerHTML//'DOM with chai and code <span style="display: none;">juhi singh</span>'
title1.innerText//'DOM with chai and code'
title1.textContent//'DOM with chai and code juhi singh'
// ✔️ Sirf ek element return karta hai
// ✔️ Fast hota hai

//2. getElementsByClassName()
//👉 Class name se elements select karta hai
let headingname = document.getElementsByClassName("heading")//htmlcollection
Array.from(headingname)//(2) [h1#title.heading.test, h2#title1.heading]//convert to array
let myheadigs = Array.from(headingname)//store array
myheadigs.forEach((h) => {
    h.style.color = "#d295b7"
} )//then change each element

//✔️ HTMLCollection return karta hai
//✔️ Multiple elements ho sakte hain
//❌ Direct loop ke bina style nahi laga sakte

//3. getElementsByTagName()
//👉 Tag name se elements select karta hai
let para = document.getElementsByTagName("p")
para[0].innerText//'Lorem ipsum dolor sit amet consectetur.'

//✔️ HTMLCollection return karta hai

//4. querySelector() ⭐ (Most Important)
//👉 CSS selector jaisa use hota hai
let anyselector = document.querySelector(".heading")
anyselector.style.textAlign = "center"
let myul = document.querySelector("ul")
let turngreen = myul.querySelector("li")//first li return
turngreen.style.padding ="12px"
turngreen.style.color ="green"
turngreen.innerText ="first"//first

// ✔️ Sirf pehla matching element return karta hai
// ✔️ Interview me bahut pucha jata hai

//5. querySelectorAll()
//👉 Sab matching elements select karta hai
let list = document.querySelectorAll(".list_item")
list[3].style.background = "#9DD7C5"
list[4].innerText //'five'
let myh1 = document.querySelectorAll("h1")
myh1[0].style.fontStyle = "italic"
list.forEach((li) => {
    li.style.color = "yellow";
    li.style.background = "#3A5C51";
    li.style.fontSize ="25px";
    li.style.padding ="15px";
})
// ✔️ NodeList return karta hai
// ✔️ forEach() direct use kar sakte hain