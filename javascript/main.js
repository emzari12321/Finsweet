// * Slider
$(document).ready(function () {
  $('.testimonials__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: "<img class='a-left control-c prev slick-prev' src='images/prev-arrow.svg'>",
    nextArrow: "<img class='a-right control-c next slick-next' src='images/next-arrow.svg'>"
  });
});
// * Burger menu
var menuIcon = document.querySelector('.header__burger');
var menuOpen = document.querySelector('.header__burger-open');
var menuClose = document.querySelector('.header__burger-close');
var menu = document.querySelector('.menu');
menuIcon.addEventListener('click', () => {
  menuOpen.classList.toggle('active');
  menuClose.classList.toggle('active');
  menu.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});