import transmisionElectrica from '@images/servicios/transmision-electrica.png';
import estructural from '@images/servicios/estructural.png';
import vial from '@images/servicios/vial.png';

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
        <div class="card">
            <img src="${transmisionElectrica}" alt="Torres de alta tensión electrica">
            <h4>Ingeniería de Transmisión Eléctrica</h4>
            <p>Desarrollo y diseño de estructuras para líneas de transmisión y subestaciones eléctricas.</p>
        </div>

        <div class="card">
            <img src="${estructural}" alt="Torres de alta tensión electrica">
            <h4>Ingeniería Estructural</h4>
            <p>Con sólida base en el área, VGE Ingeniería entrega servicios dedicados al cálculo estructural de proyectos del sector inmobiliario como también del ...</p>
        </div>

        <div class="card">
            <img src="${vial}" alt="Torres de alta tensión electrica">
            <h4>Ingeniería Vial</h4>
            <p>Desarrollo de estudios viales, abarcando íntegramente el proyecto a partir del diseño ...</p>
        </div>
    </div>
</div>

`;
    return view;
};
export default Servicios;