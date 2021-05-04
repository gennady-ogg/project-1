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

let money = +prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpeses: {},
	income: [],
	timeData: time,
	savings: false
};

for (let i = 0; i < 2; i ++) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
	    b = prompt("Во сколько обойдется?", '');

	if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
		&& a != '' && a.length < 50) {
			console.log("done");
			appData.expenses[a] = b;
		} else {

		}
};

appData.moneyPerDay = appData.budget / 30;

alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");


if (appData.moneyPerDay < 100) {
    console.log ("Это минимальный уровень достатка!");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log ("Это средний уровень достатка!");
} else if (appData.moneyPerDay > 2000) {
    console.log ("Это высокий уровень достатка!");
} else {
    console.log ("Произошла ошибка");
}