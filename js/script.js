/*--
$(document).ready(function() {
	$('.burger').click(function(event) {
		$('.burger,.menu').toggleClass('active')
	});
});
	--*/

document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('.burger').onclick = function (event) {
		document.querySelector('.burger').classList.toggle('active');
		document.querySelector('.menu').classList.toggle('active');
	}
})