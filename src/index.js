import Nav from '@templates/nav.js';
import Header from '@templates/header.js';
import QuienesSomos from '@templates/quienes-somos.js';
import Servicios from '@templates/servicios.js';
import Preferirnos from '@templates/preferirnos.js';
import Contacto from '@templates/contacto.js';
import Footer from '@templates/footer.js';
import '@styles/main.scss';
// import '@utils/menu-mobile.js';
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

// HIDE ARROWS
const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } else if (targetIndex === slides.length - 1) {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    } else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
};

// // CUANDO HAYA UN CLICK SE MUEVA AL SLIDE DE LA DERECHA
nextButton.addEventListener('click', (e) => {
    const currentSlide = track.querySelector('.current-card');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotNav.querySelector('.current-indicator');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex((slide) => slide === nextSlide);

    // MOVER HACIA EL SIGUIENTE SLIDE
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);

    hideShowArrows(slides, prevButton, nextButton, nextIndex);
});

prevButton.addEventListener('click', (e) => {
    const currentSlide = track.querySelector('.current-card');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotNav.querySelector('.current-indicator');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex((slide) => slide === prevSlide);

    // MOVER HACIA EL SIGUIENTE SLIDE
    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
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
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
});

// MODAL
const serviciosContainer = document.getElementById('servicios');
// console.log(serviciosContainer);
serviciosContainer.addEventListener('click', (e) => {
    // console.log(e);
    e.preventDefault();
    const modalToggle = e.target.closest('.servicios__menu-link');
    // console.log(modalToggle);

    if (!modalToggle) return;
    const modal = modalToggle.nextElementSibling;
    const closeButton = modal.querySelector('.modal-close');

    const modalOpen = (_) => {
        modal.classList.add('is-open');
        modal.style.animation = 'modalIn 300ms forwards';
        document.body.style.overflowY = 'hidden';
    };

    modalOpen();

    const modalClose = (_) => {
        modal.classList.remove('is-open');
        modal.removeEventListener('animationend', modalClose);
        document.body.style.overflowY = 'scroll';
    };

    closeButton.addEventListener('click', (_) => {
        // modal.classList.remove('is-open');
        modal.style.animation = 'modalOut 300ms forwards';
        modal.addEventListener('animationend', modalClose);
    });

    document.addEventListener('keydown', (e) => {
        if (e.keyCode === 27) {
            modal.style.animation = 'modalOut 300ms forwards';
            modal.addEventListener('animationend', modalClose);
            document.body.style.overflowY = 'scroll';
        }
    });
});