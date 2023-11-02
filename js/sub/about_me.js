const about_btn = document.querySelector(".about_subBox_btn")
const subBox = document.querySelector(".about_subBox")
const about_closeBtn = document.querySelector(".about_subBox .close_btn")

about_btn.addEventListener("click", (e) => {
    e.preventDefault()
    subBox.style.display = "block"
    about_btn.style.display = "none"
})

about_closeBtn.addEventListener("click", (e) => {
    e.preventDefault()
    subBox.style.display = "none"
    about_btn.style.display = "block"
})