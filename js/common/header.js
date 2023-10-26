const gnb = document.querySelector("#h_gnb")
const down = gnb.querySelector(".fa-caret-down")
const btn = gnb.querySelector(".h_gnbBtn")
const li = gnb.querySelector("li")

btn.addEventListener("click", (e) => {
    e.preventDefault()
    if (li.classList.contains("h_on")) {
        li.classList.remove("h_on")
        down.style.transform = "rotate(0deg)"
        down.style.transition = "0.2s"
    } else {
        li.classList.add("h_on")
        down.style.transform = "rotate(-90deg)"
        down.style.transition = "0.2s"
    }
})