document.addEventListener("DOMContentLoaded", function () {
	const burger = document.querySelector(".burger");
	const mobileMenu = document.querySelector(".mobile-menu");

	burger.onclick = function (event) {
		burger.classList.toggle("active");
		mobileMenu.classList.toggle("active");
	};
});

/*----------------Team__Slider-------------*/
let offset = 0; // смещение от левого края
const sliderInner = document.querySelector('.team__photo-inner');

document.querySelector('.team__slider-button--right').addEventListener('click', function () {
	offset = offset + 360;// offset += 360;
	if (offset > 720) {
		offset = 0;
	}
	sliderInner.style.left = -offset + 'px';
})

document.querySelector('.team__slider-button--left').addEventListener('click', function () {
	offset = offset - 360;// offset -= 360;
	if (offset < 0) {
		offset = 720;
	}
	sliderInner.style.left = -offset + 'px';
})

/*----------------FAQ-------------*/

const questionItem = document.querySelector(".question__item");

document.querySelectorAll('.question__item').forEach(item => {
	item.addEventListener('click', function () {
		this.classList.toggle('active');
	});
});

/*----------------FEEDBACK-SLIDER-------------*/

const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");
const slides = document.getElementsByClassName("feedback__slider-inner");

leftButton.addEventListener("click", onLeftClick);
rightButton.addEventListener("click", onRightClick);

let slideIndex = 1;

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