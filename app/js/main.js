$(function(){


    $('.icon-th-list').on('click', function(){
        $('.product__item').addClass('list');
        $('.icon-th-list').addClass('active');
        $('.icon-th-large').removeClass('active');
    })

    $('.icon-th-large').on('click', function(){
        $('.product__item').removeClass('list');
        $('.icon-th-large').addClass('active');
        $('.icon-th-list').removeClass('active');
    })

    
    
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix: "$"
    });


    $(".rate-star").rateYo({
        rating: 5,
        readOnly: true,
        starWidth: "12px"
      });

    $('.product-slider__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
    })

   $('.header__box-btn').on('click', function(){
       $('.header__box').toggleClass('active');
   })

   $('.header__menu-btn').on('click', function(){
    $('.menu__list').slideToggle();
})


   var mixer = mixitup('.products__inner-box');

});