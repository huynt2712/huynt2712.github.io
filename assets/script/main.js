$(document).ready(function () {
  $("#home-slider .owl-carousel").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  $("#wrapper-home-banner-top .owl-carousel").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    mouseDrag: false,
    touchDrag: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });
  $(".burger-nav").on("click", function () {
    $(".header-menu ul").toggleClass("open");
  });
});
