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
}); 