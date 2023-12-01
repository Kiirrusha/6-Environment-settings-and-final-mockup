const area = document.querySelector(".menu__area-blur");
const menuCheckBox = document.querySelector("#menu__moving");
const menuMessage = document.querySelector(".header__menu-message");
const menuPhone = document.querySelector(".header__menu-phone");
const phoneSidebarChecBox = document.querySelector("#sidebar-phone");
const phoneHeaderChecBox = document.querySelector("#header-phone");
const PhonemessegeCloseChecbox = document.querySelector(".header__menu-phone .title__img");
const messegeSidebarChecBox = document.querySelector("#sidebar-message");
const messegeHeaderChecBox = document.querySelector("#header-message");
const messegeCloseChecbox = document.querySelector(".title__img");



menuCheckBox.addEventListener("click", () => {
  if (menuCheckBox.checked === true) {
    area.style.display = "block";
  } else {
    area.style.display = "none";
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 1365) {
    area.style.display = "none";
  } else if (menuCheckBox.checked === true) {
    area.style.display = "block";
  } else {
    area.style.display = "none";
  }
});

area.addEventListener("click", () => {
  area.style.display = "none";
  menuCheckBox.checked = false;
  menuMessage.checked = false;
  menuMessage.style.display = "none";
  menuPhone.checked = false;
  menuPhone.style.display = "none";

});


phoneSidebarChecBox.addEventListener("click", () => {
  if (phoneHeaderChecBox.checked == true) {
    menuPhone.style.display = "none";
    area.style.display = "none";
    phoneHeaderChecBox.checked = false;
  }
  if (
    phoneHeaderChecBox.checked == false ||
    phoneHeaderChecBox.checked == undefined
  ) {
    menuPhone.style.display = "flex";
    area.style.display = "block";
    phoneHeaderChecBox.checked = true;
    menuCheckBox.checked = false;
  }
});

phoneHeaderChecBox.addEventListener("click", () => {
  if (phoneHeaderChecBox.checked == true) {
    menuPhone.style.display = "none";
    area.style.display = "none";
    phoneHeaderChecBox.checked = false;
  }
  if (
    phoneHeaderChecBox.checked == false ||
    phoneHeaderChecBox.checked == undefined
  ) {
    menuPhone.style.display = "flex";
    area.style.display = "block";
    phoneHeaderChecBox.checked = true;
  }
});

messegeSidebarChecBox.addEventListener("click", () => {
  if (messegeSidebarChecBox.checked == true) {
    menuMessage.style.display = "none";
    area.style.display = "none";
    messegeSidebarChecBox.checked = false;
  }
  if (
    messegeSidebarChecBox.checked == false ||
    messegeSidebarChecBox.checked == undefined
  ) {
    menuMessage.style.display = "flex";
    area.style.display = "block";
    messegeSidebarChecBox.checked = true;
    menuCheckBox.checked = false;
  }
});

messegeHeaderChecBox.addEventListener("click", () => {
  if (messegeHeaderChecBox.checked == true) {
    menuMessage.style.display = "none";
    area.style.display = "none";
    messegeHeaderChecBox.checked = false;
  }
  if (
    messegeHeaderChecBox.checked == false ||
    messegeHeaderChecBox.checked == undefined
  ) {
    menuMessage.style.display = "flex";
    area.style.display = "block";
    messegeHeaderChecBox.checked = true;
  }
});

messegeCloseChecbox.addEventListener("click", () => {
        menuMessage.style.display = "none";
        // menuPhone.style.display = "none";
        area.style.display = "none";
});

PhonemessegeCloseChecbox.addEventListener("click", () => {
  menuPhone.style.display = "none";
  area.style.display = "none";
});