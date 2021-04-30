'use strict';
// gamb
$('.wrapper').addClass('loaded');

$('.icon-menu').click(function(event) {
	$(this).toggleClass('active');
	$('.menu__body').toggleClass('active');
	$('body').toggleClass('lock');
});
$('.menu__body a').click(function() {

	$('.menu__body, .icon-menu').removeClass('active');
	$('body').removeClass('lock');

});



let persone = {
	name: "gena",
	age: 30,
	isMarried: false
};

console.log(persone["isMarried"]);

let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];

console.log(arr[0]);

let answer = prompt("Есть ли вам 18?", "Да");

console.log(answer);