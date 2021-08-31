import planos from '@images/planos2.png';

const QuienesSomos = () => {
    const view = `

        <section id='qs' class="quienes-somos container">
            <div id="quienes-somos__image" class="quienes-somos__image ">
                <img src="${planos}" alt="Persona trabajando con planos en un escritorio">
            </div>
            <div class="quienes-somos__text">
                <h2>Quiénes Somos</h2>
                <p>
                    VGE ingeniería es un equipo de profesionales dedicado al cálculo y verificación estructural de proyectos de variada gama dentro del espectro de la Ingeniería Civil, dedicados a buscar soluciones eficientes e innovadoras, desde la concepción del proyecto
                    hasta el proceso de ingeniería en profundidad.
                </p>
            </div>
        </section>

  `;
    return view;
};

export default QuienesSomos;