let img1 = document.getElementById("img")
let daste=document.getElementById("ganr")
let khosroBook=document.querySelector(".khosroBook")
let bookIinformationKhosro=document.querySelector('.book_information')
let m=document.querySelectorAll(".m")
let body=document.body
khosroBook.addEventListener("click",function () {
    bookIinformationKhosro.style.display="flex"
    body.classList.add("bodyA")
    body.classList.remove("body")
    m.forEach(function (ms) {
        ms.style.display="none"
    })
})
bookIinformationKhosro.addEventListener("keydown",function (event) {
    console.log(event);
    
    bookIinformationKhosro.style.display="none"
})

let flag=false
function image() {
    if (flag) {
        img1.style.transform="rotate(0deg)"
        daste.style.opacity="0%"
        flag = false
        
    } else {
        img1.style.transform="rotate(180deg)"
        daste.style.opacity="100%"
        flag = true
        
    }
} 