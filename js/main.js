$(function(){

    $('.slider__top-inner').slick({
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<button type="button" class="slick-arrows slick-prev"><img src="images/left.svg" alt="prev"></button>',
        nextArrow: '<button type="button" class="slick-arrows slick-next"><img src="images/right.svg" alt="next"></button>',
        fade: true,
    });

    $('.projects-tabs__link').on('click', function(a){
        a.preventDefault();
        $('.projects-tabs__link').removeClass('projects-tabs__link--active');
        $(this).addClass('projects-tabs__link--active');

        $('.projects-tabs__content').removeClass('projects-tabs__content--active');
        $($(this).attr('href')).addClass('projects-tabs__content--active');
    })

});