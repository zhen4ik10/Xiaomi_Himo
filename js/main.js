$(function () {
    $('.bike-slider, .slider__items').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    $(".menu, bike__link").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });

    // Smooth scroll and pageup
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1600) {
            $('.page-up').fadeIn();
        } else {
            $('.page-up').fadeOut();
        }
    });
}); 