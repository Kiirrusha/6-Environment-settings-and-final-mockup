import { mockBrands } from "./mock";


const brandsWrapper = document.getElementById("brands-wrapper");
const brandsButton = document.getElementById("brands-button");
const buttonImg = brandsButton.querySelector("img");
const buttonText = brandsButton.lastChild;



const appender = (brand) => {
	const li = document.createElement("li");
	li.classList.add("brands-slide");

	const img = document.createElement("img");
	img.classList.add("name-brands__img");
	img.src = `./assets/brands/${brand}.svg`;
	img.alt = brand;

	const link = document.createElement("div");
	link.classList.add("name-brands__link");

	const a = document.createElement("a");
	a.href = "#";

	const imgLink = document.createElement("img");
	imgLink.src = "./assets/brands/go.svg";
	imgLink.alt = "go";

	a.appendChild(imgLink);

	link.appendChild(a);

	li.appendChild(img);
	li.appendChild(link);

	brandsWrapper.appendChild(li);
};



function getLength () {
	if (window.innerWidth >= 768 && window.innerWidth <= 1119) {
		return 6;
	}
	if (window.innerWidth >= 1120 ) {
		return 8;
	}
}



brandsButton.addEventListener("click", (e) => {
	
	brandsWrapper.innerHTML = "";	

});

brandsButton.addEventListener("click", (e) => {

	brandsWrapper.dataset.visible = brandsWrapper.dataset.visible === "hidden" ? "full" : "hidden"; 
	buttonText.textContent = brandsWrapper.dataset.visible === "hidden" ? "Показать все" : "Скрыть";
	buttonImg.src = brandsWrapper.dataset.visible === "hidden" ? "./assets/svg/expand.svg" : "./assets/svg/expand2.svg";

	
	let mockBrandsClone = [...mockBrands];
	if (brandsWrapper.dataset.visible === "hidden") {
		mockBrandsClone.length = getLength();
	}

	mockBrandsClone.forEach(appender);

	// console.log(brandsWrapper.dataset.visible);
	// console.log(mockBrands.length);
	// console.log(mockBrands);
});



let mockBrandsClone = [...mockBrands];

mockBrandsClone.length = getLength();

mockBrandsClone.forEach(appender);



// if (window.innerWidth >= 768 && window.innerWidth <= 1019) {
// 	mockBrands.length = 6;
// }
// if (window.innerWidth >= 1019) {
// 	mockBrands.length = 8;
// }


