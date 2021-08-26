import Nav from '@templates/nav.js';
import Header from '@templates/header.js';
import QuienesSomos from '@templates/quienes-somos.js';
import Servicios from '@templates/servicios.js';
import Preferirnos from '@templates/preferirnos.js';
import Contacto from '@templates/contacto.js';
import Footer from '@templates/footer.js';
import '@styles/main.scss';
// import logo from '@images/vge-logo.svg';

(function App() {
    const nav = null || document.getElementById('nav');
    const header = null || document.getElementById('header');
    const qs = null || document.getElementById('quienes-somos');
    const servicios = null || document.getElementById('servicios');
    const preferirnos = null || document.getElementById('preferirnos');
    const contacto = null || document.getElementById('contacto');
    const footer = null || document.getElementById('footer');
    nav.innerHTML = Nav();
    header.innerHTML = Header();
    qs.innerHTML = QuienesSomos();
    servicios.innerHTML = Servicios();
    preferirnos.innerHTML = Preferirnos();
    contacto.innerHTML = Contacto();
    footer.innerHTML = Footer();
})();

// MENU MOBILE
const btnHamburger = document.getElementById('btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');

btnHamburger.addEventListener('click', function() {
    if (header.classList.contains('open')) {
        header.classList.remove('open');
        overlay.classList.remove('slide-in');
        overlay.classList.add('slide-out');
    } else {
        header.classList.add('open');
        overlay.classList.add('slide-in');
        overlay.classList.remove('slide-out');
    }
});

// PREFERIRNOS SLIDER
const track = document.querySelector('.preferirnos__cards');
const slides = Array.from(track.children);

// BOTONES DE DESPLAZAMIENTO
const nextButton = document.querySelector('.preferirnos__botonera--right');
const prevButton = document.querySelector('.preferirnos__botonera--left');

// // CIRCULOS DE DESPLAZAMIENTO
const dotNav = document.querySelector('.preferirnos__nav');
const dots = Array.from(dotNav.children);

// // CAPTURAMOS EL ANCHO DE LOS SLIDES
const slideWidth = slides[0].getBoundingClientRect().width;

// // COLOCAR UN SLIDE AL LADO DEL OTRO
const setSlidePosition = (slides, index) => {
    slides.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-card');
    targetSlide.classList.add('current-card');
};

// UPDATE DOTS
const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-indicator');
    targetDot.classList.add('current-indicator');
};

// console.log(slides);

// // CUANDO HAYA UN CLICK SE MUEVA AL SLIDE DE LA DERECHA
nextButton.addEventListener('click', (e) => {
    const currentSlide = track.querySelector('.current-card');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotNav.querySelector('.current-indicator');
    const nextDot = currentDot.nextElementSibling;

    // MOVER HACIA EL SIGUIENTE SLIDE
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
});

prevButton.addEventListener('click', (e) => {
    const currentSlide = track.querySelector('.current-card');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotNav.querySelector('.current-indicator');
    const prevDot = currentDot.previousElementSibling;

    // MOVER HACIA EL SIGUIENTE SLIDE
    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
});

// CUANDO HAGO CLICL EN LOS INDICADORES, SE MOVERA AL SLIDE
dotNav.addEventListener('click', (e) => {
    // QUE INDICADOR FUE CLICKEADO?
    const targetDot = e.target.closest('button');
    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-card');
    const currentDot = dotNav.querySelector('.current-indicator');

    const targetIndex = dots.findIndex((dot) => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    // console.log(targetIndex);
});