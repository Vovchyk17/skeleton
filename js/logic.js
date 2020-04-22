$ = jQuery;
$(document).ready(function () {
    var width = document.body.clientWidth;

    $('#navToggle').click(function () {
        $(this).toggleClass('open');
        $('#mainMenu').toggleClass('open');
    });

    if (width <= 1024) {
        $("#mainMenu .menu-item-has-children > a").append("<span></span>");
        $("#mainMenu .menu-item-has-children span").click(function () {
            $(this).parent().next().slideToggle(300);
            $(this).toggleClass("active");
            return false;
        });
    }

    //WPCF7
    $(this).on('click', '.wpcf7-not-valid-tip', function () {
        $(this).prev().trigger('focus');
        $(this).fadeOut(500, function () {
            $(this).remove();
        });
    });
    $('select.wpcf7-form-control').each(function () {
        $(this).find('option').first().val('');
    });

    if (!$(".woocommerce-checkout")[0]) {
        $('select').selectric({
            disableOnMobile: false,
            nativeOnMobile: false,
        });
    }

    // $('[data-fancybox]').fancybox();

    // scroll to
    // $('html, body').animate({
    //     scrollTop: $(elem).offset().top - $('header').outerHeight()
    // }, 700);


    //find empty paragraphs
    /*$('p').each(function() {
        var t = $(this);
        if(t.html().replace(/\s|&nbsp;/g, '').length === 0) { t.addClass('jEmpty'); }
    });*/

    // animations
    // AOS.init({
    // disable: true,
    // disable: 'mobile',
    // once: true,
    // offset: 150,
    // duration: 600,
    // easing: 'ease-in-out'
    // });

});

$(window).on('load', function () {
    /*var swiper = new Swiper('.swiper-container', {
       spaceBetween: 30,
       pagination: {
       el: '.swiper-pagination',
       type: 'bullets',
       clickable: 'true',
     },
     navigation: {
       nextEl: '.custom-next',
       prevEl: '.custom-prev',
     },
   });*/

    // fluid video (iframe)
    $('.content iframe').each(function(i) {
        var t = $(this),
            p = t.parent();
        if (p.is('p') && !p.hasClass('full_frame')) {
            p.addClass('full_frame');
        }
    });
    $('.wp-video').each(function() {
        $('.mejs-video .mejs-inner', this).addClass('full_frame');
    });

});