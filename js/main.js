$(function () {
 
    $('.team-slider').slick({
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 8,
        dots: false,
        arrows: true, responsive: [
            {
                breakpoint: 1106,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            }
        ]
    });
    
    // $('.btn__menu').on('click', function () {
    //     $('.menu__list').slideToggle();
    // });
});