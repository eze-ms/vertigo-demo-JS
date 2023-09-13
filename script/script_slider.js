$(document).ready(function() {
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
    cssEase: 'linear'
  });
});

$(window).on('load', function() {
  $('.slider').addClass('loaded');
});

$('.slider_prev').click(function() {
  $('.slider').slick('slickPrev');
});
  
$('.slider_next').click(function() {
  $('.slider').slick('slickNext');
});

// const rangeSlider = document.getElementById('.slider');


// rangeSlider.addEventListener('input', function() {
//   const selectedValue = rangeSlider.value;
//   priceSpan.textContent = selectedValue + ' €';
// });
