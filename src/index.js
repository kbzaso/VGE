import Template from '@templates/template.js';
import '@styles/main.scss';
// import logo from '@images/vge-logo.svg';

(async function App() {
    const main = null || document.getElementById('main');
    main.innerHTML = Template();
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