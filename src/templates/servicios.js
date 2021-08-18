const Servicios = () => {
    const view = ` 
<section class="servicios hide-for-desktop">
    <div class="servicios__text">
        <h2>Nuestros Servicios</h2>
        <h3>Uniendo tres ramas de la Ingeniería Civil, buscamos proyectar ...</h3>
    </div>
    <div class="servicios__menu">
        <a href=""><span>Ingeniería de Transmisión Eléctrica</span></a>
        <a href=""><span>Ingeniería Estructural</span></a>
        <a href=""><span>Ingeniería Vial</span></a>
    </div>
</section>



<div class="servicios-desktop hide-for-mobile">

    <div class="servicios-desktop__text">
        <h2>Nuestros Servicios</h2>
        <h3>Uniendo tres ramas de la Ingeniería Civil, buscamos proyectar nuestra nueva propuesta como ...</h3>
    </div>
    
    <div class="servicios-desktop__cards container">
    <a href="">
        <div class="card">
            
                <div class="card__image electrica">
                    <div class="card__content">
                        <div class="card__button">Ver más</div>
                    </div>
                </div>
                <h4>Ingeniería de Transmisión Eléctrica</h4>
                <p>Desarrollo y diseño de estructuras para líneas de transmisión y subestaciones eléctricas.</p>
        </div>
    </a>

    <a href="">
        <div class="card">
            <div class="card__image estructural">
                <div class="card__content">
                        <div class="card__button">Ver más</div>
                    </div>
                </div>
            <h4>Ingeniería Estructural</h4>
            <p>Con sólida base en el área, VGE Ingeniería entrega servicios dedicados al cálculo estructural de proyectos del sector inmobiliario como también del ...</p>
        </div>
    </a>

    <a href="">
        <div class="card">
            <div class="card__image vial">
                <div class="card__content">
                    <div class="card__button">Ver más</div>
                </div>
            </div>
            <h4>Ingeniería Vial</h4>
            <p>Desarrollo de estudios viales, abarcando íntegramente el proyecto a partir del diseño ...</p>
        </div>
    </a>
    </div>
</div>

`;
    return view;
};
export default Servicios;