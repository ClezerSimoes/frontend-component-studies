const   openButton = document.querySelector("#open-popup"),
        closeButton = document.querySelector("#close-btn"),
        overlay = document.querySelector(".overlay")
        popup = document.querySelector("#popup");

openButton.addEventListener("click", ()=>{
    popup.classList.toggle("active")
})

closeButton.addEventListener("click", ()=>{
    popup.classList.remove("active")
})

overlay.addEventListener("click", ()=>{
    popup.classList.remove("active")
})