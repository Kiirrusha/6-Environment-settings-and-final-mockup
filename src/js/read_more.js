const btn = document.querySelector(".main__content-more");
const text = document.querySelector(".main__content-expand-title");
const img = document.querySelector(".main__content-expand-img");
const hiddenText = document.getElementById("main__content-box");

btn.addEventListener("click", () => {
    
    if (text.innerText =="Читать далее") {
        text.innerText = "Скрыть";
        img.classList.add("open");
        hiddenText.classList.add('open');
    } else {
        text.innerText = "Читать далее";
        img.classList.remove("open");
        hiddenText.classList.remove('open');

    }
}
);
