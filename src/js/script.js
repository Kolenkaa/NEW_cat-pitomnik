document.addEventListener("DOMContentLoaded", function () {
	const burger = document.querySelector(".burger");
	const mobileMenu = document.querySelector(".mobile-menu");

	burger.onclick = function (event) {
		burger.classList.toggle("active");
		mobileMenu.classList.toggle("active");
	};
});


/*----------------FAQ-------------*/

const questionItem = document.querySelector(".question__item");

document.querySelectorAll('.question__item').forEach(item => {
	item.addEventListener('click', function () {
		this.classList.toggle('active');
	});
});

/*-------------- TEAM-SLIDER-----------------*/
const sliders = document.querySelectorAll(".slider");

console.log(sliders, "sliders");

sliders.forEach((_slider, index) => {
	const sliderId = index + 1;
	let slideIndex = 1;

	const leftButton = document.querySelector(`#slider${sliderId} #leftButton`);
	const rightButton = document.querySelector(`#slider${sliderId} #rightButton`);
	const slides = document.querySelectorAll(`#slider${sliderId} .slider-inner`);

	leftButton.addEventListener("click", onLeftClick);
	rightButton.addEventListener("click", onRightClick);

	onClick(slideIndex);

	function onLeftClick() {
		slideIndex = slideIndex - 1;
		onClick(slideIndex);
	}

	function onRightClick() {
		slideIndex = slideIndex + 1;
		onClick(slideIndex);
	}

	function onClick(newIndex) {
		if (newIndex > slides.length) {
			slideIndex = 1;
		}

		if (newIndex < 1) {
			slideIndex = slides.length;
		}

		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}

		slides[slideIndex - 1].style.display = "block";
	}
});
/*-----------modal-------------------------*/

const openModal = document.getElementById('open__modal');
const closeModal = document.getElementById('close__modal');
const modal = document.getElementById('modal');

openModal.addEventListener('click', function (e) {
	e.preventDefault();
	modal.classList.add('active');
})

closeModal.addEventListener('click', () => {
	modal.classList.remove('active');
})