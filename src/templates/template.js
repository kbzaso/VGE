import logo from '@images/vge-logo.svg';

const Template = () => {
    const view = `
    <header class="header container container--px">
        <div class="overlay">
            <div class="header__menu">
                <div>
                    <a href="">Quienes Somos</a>
                    <span></span>
                    <a href="">Nuestros Servicios</a>
                    <span></span>
                    <a href="">Contacto</a>
                </div>
                <p>© VGE Ingenieria. Todos los derechos reservados.</p>
            </div>
        </div>
        <nav class="flex flex-jc-sb flex-ai-c">
            <a href="/" class="header__logo">
                <img src="${logo}" alt="Logo de VGE Ingeniería" />
            </a>
            
            <a id="btnHamburger" href="#" class="header__toggle hide-for-desktop">
                <span></span>
                <span></span>
                <span></span>
            </a>
            <div class="header__links hide-for-mobile">
                <a href="#" class="effect-underline">Quíenes Somos</a>
                <a href="#" class="effect-underline">Nuestros Servicios</a>
                <a href="#" class="effect-underline">Contacto</a>
            </div>
        </nav>
    </header>

    <section class="hero" role="img" aria-label="Image Description">
        <div class="hero__text">
            <h1>
                <span class="underline"><span>Nuestra calidad es tu respaldo</span></span>
            </h1>
            <p>
                Queremos entregarte soluciones prácticas e innovadoras, preocupados por la eficiencia desde su etapa conceptual hasta el desarrollo de la Ingeniería en detalle.
            </p>
        </div>
    </section>
  `;
    return view;
};

export default Template;