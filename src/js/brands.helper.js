import { mockBrands } from "./mock";

const brandsWrapper = document.getElementById("brands-wrapper");
const brandsButton = document.getElementById("brands-button");

brandsButton.addEventListener("click", (e) => {});

const mapper = (brand) => {
	const li = document.createElement("li");
	li.classList.add("brands-slide");

	const img = document.createElement("img");
	img.classList.add("name-brands__img");
	img.src = `../assets/brands/${brand}.svg`;
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

if (window.innerWidth >= 768 && window.innerWidth <= 1019) {
	mockBrands.length = 6;
}
if (window.innerWidth >= 1019) {
	mockBrands.length = 8;
}

mockBrands.map(mapper);
