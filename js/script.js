const slideShow = document.getElementById('slideShow');
const slides = slideShow.getElementsByTagName('video');

let index = 0;

const nextSlide = () => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

const prevSlide = () => {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

const slideShowText = document.getElementById('slideShowText');
const slidesText = slideShowText.getElementsByTagName('div');

let indexText = 0;

const nextSlideText = () => {
    slidesText[indexText].classList.remove('active');
    indexText = (indexText + 1) % slidesText.length;
    slidesText[indexText].classList.add('active');
}

const prevSlideText = () => {
    slidesText[indexText].classList.remove('active');
    indexText = (indexText - 1 + slidesText.length) % slidesText.length;
    slidesText[indexText].classList.add('active');
}

const toggleMenu = () => {
    const menuIcon = document.querySelector('.menuIcon');
    const navbar = document.getElementById('navbar')
    menuIcon.classList.toggle('active')
    navbar.classList.toggle('active')
}