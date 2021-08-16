// import planos from '@images/planos.jpg';

import helmet from '@images/preferirnos/helmet.svg';
import eficiencia from '@images/preferirnos/eficiencia.svg';
import respaldo from '@images/preferirnos/respaldo.svg';
const Preferirnos = () => {
    const view = `
    <div class="preferirnos container">
        <h2>Porque Preferirnos</h2>
        <h3>Uniendo tres ramas de la Ingeniería Civil, buscamos proyectar nuestra nueva propuesta como una opción segura y confiable.</h3>
        
        <div class="preferirnos__botonera hide-for-desktop">
            <a href=""><</a>
            <a href="">></a>
        </div>
        
        <div class="preferirnos__cards">
            <div class="preferirnos__tab">
                <img src="${helmet}" alt="Icono de respaldo" />
                <h2>Respaldo</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati officia dolorem reiciendis enim ipsam, repellendus nisi quibusdam corporis quisquam. Hic esse voluptate iusto sed animi, doloribus beatae a quisquam voluptatem?
                </p>
            </div>
            <div class="preferirnos__tab">
                <img src="${eficiencia}" alt="Icono de eficiencia" />
                <h2>Respaldo</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati officia dolorem reiciendis enim ipsam, repellendus nisi quibusdam corporis quisquam. Hic esse voluptate iusto sed animi, doloribus beatae a quisquam voluptatem?
                </p>
            </div>
            <div class="preferirnos__tab">
                <img src="${respaldo}" alt="Icono de confianza" />
                <h2>Respaldo</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati officia dolorem reiciendis enim ipsam, repellendus nisi quibusdam corporis quisquam. Hic esse voluptate iusto sed animi, doloribus beatae a quisquam voluptatem?
                </p>
            </div>
        </div>


    </div>
  `;
    return view;
};

export default Preferirnos;