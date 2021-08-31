import logo from '@images/vge-logo.svg';

const Nav = () => {
    const view = `
          <div class="header container container--px">
            <nav class="flex flex-jc-sb flex-ai-c">
              <a href="#header" class="header__logo">
                  <img src="${logo}" alt="Logo de VGE Ingeniería" />
              </a>
              
              <a id="btnHamburger" href="#" class="header__toggle hide-for-desktop">
                  <span></span>
                  <span></span>
                  <span></span>
              </a>
              <div class="header__links hide-for-mobile">
                  <a href="#qs" class="effect-underline">Quiénes Somos</a>
                  <a href="#servicios" class="effect-underline">Nuestros Servicios</a>
                  <a href="#contacto" class="effect-underline">Contacto</a>
              </div>
            </nav>
            
            <div class="overlay">
                <div class="header__menu">
                    <div>
                        <a href="#quienes-somos">Quiénes Somos</a>
                        <span></span>
                        <a href="">Nuestros Servicios</a>
                        <span></span>
                        <a href="">Contacto</a>
                    </div>
                    <p>© VGE Ingeniería. Todos los derechos reservados.</p>
                </div>
            </div>
          </div>
  `;
    return view;
};

export default Nav;