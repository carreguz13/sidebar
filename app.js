var toggle = document.querySelector(".sidebar-toggle")
var closeBtn = document.querySelector(".close-btn")
var sidebar = document.querySelector(".sidebar")


toggle.addEventListener("click", function(){
    sidebar.classList.toggle("show-sidebar")
})

closeBtn.addEventListener("click", function(){
    sidebar.classList.remove("show-sidebar")
})