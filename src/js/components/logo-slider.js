import Swiper from 'swiper/bundle';

const logoSlider = () => {
    $(document).ready(function() {
        const swiper = new Swiper('.js--logo-slider', {
            slidesPerView: 4,
            spaceBetween: 15,
            loop: true,
            autoplay: {
                delay: 1,
            },
            speed: 7000,
            breakpoints: {
                768: {
                  slidesPerView: 5,
                },
                1024: {
                  slidesPerView: 6,
                },
            }
        });
    });
}
export default logoSlider;