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

