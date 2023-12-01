const btn = document.querySelector(".main__content-more");
const more = document.getElementById("more");
const text = document.querySelector(".main__content-expand-title");
const img = document.querySelector(".main__content-expand-img");


btn.addEventListener("click", () => {
    
    if (text.innerText =="Читать далее") {
        text.innerText = "Скрыть";
        more.style.display = "inline";
        img.src = "../assets/svg/expand2.svg";
    } else {
        text.innerText = "Читать далее";
        more.style.display = "none";
        img.src = "../assets/svg/expand.svg";
    }
}
);
