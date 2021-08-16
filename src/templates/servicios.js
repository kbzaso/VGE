import transmisionElectrica from '@images/servicios/transmision-electrica.png';

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
            <img src="${transmisionElectrica}" alt="Torres de alta tensión electrica">
            <h4>Ingeniería de Transmisión Eléctrica</h4>
            <p>Desarrollo y diseño de estructuras para líneas de transmisión y subestaciones eléctricas.</p>
        </div>

        <div class="card">
            <img src="${transmisionElectrica}" alt="Torres de alta tensión electrica">
            <h4>Ingeniería de Transmisión Eléctrica</h4>
            <p>Desarrollo y diseño de estructuras para líneas de transmisión y subestaciones eléctricas.</p>
        </div>
    </div>
</div>

`;
    return view;
};
export default Servicios;