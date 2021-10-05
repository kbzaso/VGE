// import planos from '@images/planos.jpg';

import logo from '@images/vge-logo.svg';
const Footer = () => {
  const view = `
<div class="footer container container--px">
    <a href="/" class='footer__logo hide-for-mobile'>
        <img src="${logo}" alt="Logotipo VGE Ingenieria">
    </a>
    <div class="footer__menu">
        <div class="header__links hide-for-mobile">
            <a href="#" class="effect-underline">Quiénes Somos</a>
            <a href="#" class="effect-underline">Nuestros Servicios</a>
            <a href="#" class="effect-underline">Contacto</a>
        </div>
        <p><i class="far fa-copyright"></i> <span>VGE Ingeniería.</span> Todos los derechos reservados.</p>
    </div>
    <div class="footer__rrss hide-for-mobile">
        <a href="#"> <i class="fab fa-linkedin-in"></i></a>
    </div>
</div>
  `;
  return view;
};

export default Footer;
