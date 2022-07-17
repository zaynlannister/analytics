import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let cards = document.querySelectorAll('.pricing__card');
let swiperContainer = document.querySelector('.footer__modes');
let swiperWrapper = document.querySelector('.swiper-container');

function addClassName(element, name) {
    element.classList.add(name)
}

function removeClassName(element, name) {
    element.classList.remove(name)
}

window.addEventListener('resize', removingAndAddingClasses);

window.addEventListener('DOMContentLoaded', removingAndAddingClasses);

function removingAndAddingClasses() {
    if (window.innerWidth <= 1000) {
        addClassName(swiperContainer, 'swiper')
        addClassName(swiperWrapper, 'swiper-wrapper')
        cards.forEach(item => addClassName(item, 'swiper-slide'))

        const swiper = new Swiper('.swiper', {
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    } else {
        removeClassName(swiperContainer, 'swiper')
        removeClassName(swiperWrapper, 'swiper-wrapper')
        cards.forEach(item => removeClassName(item, 'swiper-slide'))
    }
}