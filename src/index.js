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

// Slider preferirnos
const perfIzq = document.getElementById('preferIzq');
const prefDer = document.getElementById('preferDer');