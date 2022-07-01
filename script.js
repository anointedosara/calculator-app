let other = false;
const root = document.querySelector(':root')
let ball1 = document.querySelector(".ball1")
let ball2 = document.querySelector(".ball2")
let ball3 = document.querySelector(".ball3")
let darkMode = false;
const previousStyle = getComputedStyle(root);


ball1.addEventListener("click", () => {
    if (darkMode != true) {
        root.style.setProperty("--body", "hsl(0, 0%, 90%)")
        root.style.setProperty("--red", "hsl(25, 98%, 40%)")
        root.style.setProperty("--red-shadow", "hsl(25, 99%, 27%)")
        root.style.setProperty("--toggle", "hsl(0, 5%, 81%)")
        root.style.setProperty("--screen", "hsl(0, 0%, 93%)")
        root.style.setProperty("--key", "hsl(185, 42%, 37%)")
        root.style.setProperty("--key-shadow", "hsl(185, 58%, 25%)")
        root.style.setProperty("--orange", "hsl(45, 7%, 89%)")
        root.style.setProperty("--orange-shadow", "hsl(35, 11%, 61%)")
        root.style.setProperty("--grayish-blue", "hsl(60, 10%, 19%)")
        root.style.setProperty("--white", "hsl(60, 10%, 19%)")
        root.style.setProperty("--orange-hover", "")
        root.style.setProperty("--key-hover", "hsl(185, 50%, 50%)")
        root.style.setProperty("--red-hover", "hsl(25, 100%, 65%)")
        document.querySelector(".ball1").style.display = "none"
        document.querySelector(".ball2").style.display = "block"
    }
})

let lightMode = false

if (lightMode != true) {
    ball2.addEventListener("click", () => {
        root.style.setProperty("--body", "hsl(268, 75%, 9%)")
        root.style.setProperty("--red", "hsl(176, 100%, 44%)")
        root.style.setProperty("--red-shadow", "hsl(177, 92%, 70%)")
        root.style.setProperty("--toggle", "hsl(268, 71%, 12%)")
        root.style.setProperty("--screen", "hsl(268, 71%, 12%)")
        root.style.setProperty("--key", "hsl(281, 89%, 26%)")
        root.style.setProperty("--key-shadow", "hsl(285, 91%, 52%)")
        root.style.setProperty("--orange", "hsl(268, 47%, 21%)")
        root.style.setProperty("--orange-shadow", "hsl(290, 70%, 36%)")
        root.style.setProperty("--grayish-blue", "hsl(52, 100%, 62%)")
        root.style.setProperty("--white", "hsl(52, 100%, 62%)")
        root.style.setProperty("--white-color", "hsl(60, 10%, 19%)")
        root.style.setProperty("--orange-hover", "hsl(268, 45%, 49%")
        root.style.setProperty("--key-hover", "hsl(281, 50%, 43%)")
        root.style.setProperty("--red-hover", "hsl(175, 58%, 72%)")
        document.querySelector(".ball1").style.display = "none"
        document.querySelector(".ball2").style.display = "none"
        document.querySelector(".ball3").style.display = "block"
    })
}

ball3.addEventListener("click", () => {
    if (other != true) {
        root.style.setProperty("--body", "")
        root.style.setProperty("--red", "")
        root.style.setProperty("--red-shadow", "")
        root.style.setProperty("--toggle", "")
        root.style.setProperty("--screen", "")
        root.style.setProperty("--key", "")
        root.style.setProperty("--key-shadow", "")
        root.style.setProperty("--orange", "")
        root.style.setProperty("--orange-shadow", "")
        root.style.setProperty("--grayish-blue", "")
        root.style.setProperty("--white", "")
        root.style.setProperty("--white-color", "")
        root.style.setProperty("--orange-hover", "")
        root.style.setProperty("--key-hover", "")
        root.style.setProperty("--red-hover", "")
        document.querySelector(".ball1").style.display = "block"
        document.querySelector(".ball2").style.display = "none"
        document.querySelector(".ball3").style.display = "none"
    }
})


let output = "";
let butn = document.getElementsByClassName("butn")
let div6 = document.querySelector(".div6")
let span = document.querySelector("#butn span")
for (let i = 0; i < butn.length; i++) {
    butn[i].addEventListener("click", () => {
        output += butn[i].innerHTML;
        div6.innerHTML = output
    })
}

let but = document.getElementById("butn")
but.addEventListener("click", () => {
    output += span.innerHTML
    div6.innerHTML = output
})

let equal = document.getElementById("equal")
equal.addEventListener("click", () => {
    output = eval(`${div6.innerHTML}`);
    if (div6.innerHTML == "") {
        output = ""
    } else {
        div6.innerHTML = output
    }

})

let reset = document.getElementById("reset")
reset.addEventListener("click", () => {
    output = ""
    div6.innerHTML = output
})

let remove = document.querySelector(".delete")

remove.addEventListener("click", () => {
    output = div6.innerHTML.slice(0, -1)
    if (output === "") {
        div6.innerHTML = ""
    } else {
        div6.innerHTML = output
    }
})