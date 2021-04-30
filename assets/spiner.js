window.onload = function() {
    document.querySelector('.preloader').classList.add("preloader-remove");
};

$(window).on('load', function () {
    $('.preloader').addClass("preloader-remove");     
});