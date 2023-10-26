const logo_btn = document.querySelectorAll("li .logo")
const logo_img = document.querySelectorAll("li .main_sub")

logo_btn.forEach((el, index) => {
    el.addEventListener("click", () => {
        if (logo_img[index].classList.contains("main_on")) {
            document.querySelector(".main_on").classList.remove("main_on");
            return
        } else {
            logo_img.forEach((el, index) => {
                el.classList.remove("main_on")
            })
            logo_img[index].classList.add("main_on");
        }
    })
})