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
            <a href="#quienes-somos" class="effect-underline">Quiénes Somos</a>
            <a href="#servicios" class="effect-underline">Nuestros Servicios</a>
            <a href="#contacto" class="effect-underline">Contacto</a>
        </div>
        <p><i class="far fa-copyright"></i> <span>VGE Ingeniería.</span> Todos los derechos reservados.</p>
    </div>
    <div  style="font-size: 3em;" class="footer__rrss hide-for-mobile">
        <a href="https://www.linkedin.com/company/vge-ingenier%C3%ADa" target="_blank"> <i class="fab fa-linkedin"></i></a>
    </div>
</div>
  `;
  return view;
};

export default Footer;
