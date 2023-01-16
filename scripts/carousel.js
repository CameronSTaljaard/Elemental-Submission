let anime = document.querySelector('.carousel figure');
let right = document.querySelector('.arrow-right');
var step = 0;

function animate() {
	if (step > -340) {
		anime.style.transform = 'translateX(' + step + 'vw)';
	} else {
		anime.style.transform = 'transformX(80vw)';
		step = 85;
	}
}

setInterval(function () {
	step = step - 85;
	animate();
}, 7000);

right.onclick = function () {
	step = step - 85;
	animate();
}