$(function(){

    //MIXITUP
    var mixer = mixitup('.products__inner-box');

    //RATE
    $(".rate-star").rateYo({
        rating: 5,
        readOnly: true,
        starWidth: "12px"
      });

    //SLICK-SLIDER
    $('.product-slider__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
    })
});