import { mockDevices } from "./mock";


const brandsWrapper = document.getElementById("devices-wrapper");
const brandsButton = document.getElementById("devices-button");
const buttonImg = brandsButton.querySelector("img");
const buttonText = brandsButton.lastChild;

function getLength () {
	if (window.innerWidth >= 768 && window.innerWidth <= 1119) {
		return 3;
	}
	if (window.innerWidth >= 1120 ) {
		return 4;
	}
}

const appender = (brand) => {
	const li = document.createElement("li");
	li.classList.add("devices-slide");

	// const img = document.createElement("img");
	// img.classList.add("name-devices__img");
	// img.src = `./assets/devices/${brand}.png`;
	// img.alt = brand;

    const img = document.createElement("p");
	img.classList.add("name-devices__img");
	img.textContent = `${brand}`;

	const link = document.createElement("div");
	link.classList.add("name-devices__link");

	const a = document.createElement("a");
	a.href = "#";

	const imgLink = document.createElement("img");
    imgLink.classList.add("img-devices__link")
	imgLink.src = "./assets/devices/go.svg";
	imgLink.alt = "go";

	a.appendChild(imgLink);

	link.appendChild(a);

	li.appendChild(img);
	li.appendChild(link);

	brandsWrapper.append(li);
};

function test_1() {
	if (brandsWrapper.dataset.visible === "hidden"){
	brandsWrapper.innerHTML = "";

		if (window.innerWidth >= 768) {
			let mockBrandsClone = [...mockDevices];

			mockBrandsClone.length = getLength();	
			mockBrandsClone.forEach(appender);
		}
}
	

}

brandsButton.addEventListener("click", (e) => {
	brandsWrapper.innerHTML = "";

	brandsWrapper.dataset.visible = brandsWrapper.dataset.visible === "hidden" ? "full" : "hidden"; 
	buttonText.textContent = brandsWrapper.dataset.visible === "hidden" ? "Показать все" : "Скрыть";
	buttonImg.src = brandsWrapper.dataset.visible === "hidden" ? "./assets/svg/expand.svg" : "./assets/svg/expand2.svg";

	
	let mockBrandsClone = [...mockDevices];
	if (brandsWrapper.dataset.visible === "hidden") {
		mockBrandsClone.length = getLength();
	}

	mockBrandsClone.forEach(appender);

	// console.log(brandsWrapper.dataset.visible);
	// console.log(mockBrands.length);
	// console.log(mockBrands);
});


window.onresize = test_1;

let mockBrandsClone = [...mockDevices];

mockBrandsClone.length = getLength();

mockBrandsClone.forEach(appender);
