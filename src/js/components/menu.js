$(document).ready(function(){
    const header = document.querySelector('.js--header');

    const changeHeaderOnScroll = () => {
        if(window.pageYOffset > 0) {
            header.classList.add('scrolled')
        } else {
            header.classList.remove('scrolled')
        }
    }
    changeHeaderOnScroll();

    window.addEventListener('scroll', () => {
        changeHeaderOnScroll();
    });

    $('.js--menu-mobile-button').on('click', function() {
        $(this).toggleClass('is-opened');
        $('.js--main-menu').toggle();
        $('body').toggleClass('overflow-hidden');
        $('.o-header').toggleClass('is-active');
    });
    
    $(window).on('resize', function() {
        $('.js--menu-mobile-button').removeClass('is-opened');
        $('.js--main-menu').removeAttr('style');
        $('body').removeClass('overflow-hidden');
        $('.o-header').removeClass('is-active');
    });
}); 