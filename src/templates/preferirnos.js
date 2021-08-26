// import planos from '@images/planos.jpg';

import helmet from '@images/preferirnos/helmet.svg';
import eficiencia from '@images/preferirnos/eficiencia.svg';
import respaldo from '@images/preferirnos/respaldo.svg';

const Preferirnos = () => {
    const view = `
            
    <div class="preferirnos">
    
        <div class="preferirnos__botonera hide-for-desktop">
            <button type='button' class='preferirnos__botonera--left'><i class="fas fa-chevron-left"></i></button>
            <button type='button' class='preferirnos__botonera--right'><i class="fas fa-chevron-right"></i></button>
        </div>

    <div class="preferirnos__content container container--px">
        <h2>Por qué Preferirnos</h2>
        <h3>Uniendo tres ramas de la Ingeniería Civil, buscamos proyectar nuestra nueva propuesta como una opción segura y confiable.</h3>
        <div class="preferirnos__cards">
            <div class="preferirnos__tab current-card expertiz">
                <img src="${helmet}" alt="Icono de respaldo" />
                <h2>Expertiz</h2>
                <p>
                En VGE Ingeniería, convergen tres campos de la Ingeniería civil en búsqueda de innovar en la industria y proponer un nuevo estándar en el desarrollo de soluciones estructurales.
                </p>
            </div>
            <div class="preferirnos__tab eficiencia">
                <img src="${eficiencia}" alt="Icono de eficiencia" />
                <h2>Eficiencia</h2>
                <p>
                Estamos dedicados a la optimización de nuestros procesos, buscando ser un referente en cuanto a pulcritud de nuestro trabajo y la práctica inversión del tiempo. 
                </p>
            </div>
            <div class="preferirnos__tab respaldo">
                <img src="${respaldo}" alt="Icono de confianza" />
                <h2>Respaldo</h2>
                <p>
                Nos motiva ser un sello de calidad, y demostrar nuestro compromiso, es parte de nuestras mayores fortalezas. 
                </p>
            </div>
        </div>
            <div class="preferirnos__nav hide-for-desktop">
                <button type='button' class="preferirnos__indicator current-indicator"></button>
                <button type='button' class="preferirnos__indicator"></button>
                <button type='button' class="preferirnos__indicator"></button>
            </div>
        </div>
    </div>


    
  `;
    return view;
};

export default Preferirnos;