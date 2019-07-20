'use strict';

var slide = document.getElementById('slide');
var imgArr = ['img1.png', 'img2.png', 'img3.png', 'img4.png', 'img5.png', 'img6.png'];
var imgSliger_1 = document.getElementsByClassName('imgSlideMenu');

var n = -1;
window.addEventListener('load', start);

function slider_1() {
	n++;
	slide.style.backgroundImage = 'url(image/' + imgArr[n] + ')';
	for (var i = 0; i < imgSliger_1.length; i++) {
		if (n == i) {
			imgSliger_1[i].style.opacity = '0.5';
		} else imgSliger_1[i].style.opacity = '1';
	}
	if (n == 2) {
		n = -1;
	}
};

function start() {
	window.timerId = window.setInterval(slider_1, 2000);
}
function modal() {
	var myModal = document.getElementById('myModal');
	myModal.removeClass('overlay1');
}