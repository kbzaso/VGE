import electrica from '@images/servicios/electrica/01.jpg';
import electricados from '@images/servicios/electrica/02.jpg';
import electricatres from '@images/servicios/electrica/03.jpg';
import vial from '@images/servicios/vial/01.jpg';
import vialdos from '@images/servicios/vial/02.jpg';
import vialtres from '@images/servicios/vial/03.jpg';
import inmobiliario from '@images/servicios/estructural/inmobiliario/01.jpg';
import inmobiliariodos from '@images/servicios/estructural/inmobiliario/02.jpg';
import inmobiliariotres from '@images/servicios/estructural/inmobiliario/03.jpg';
import industrial from '@images/servicios/estructural/industrial/01.jpg';
import industrialdos from '@images/servicios/estructural/industrial/02.jpg';
import industrialtres from '@images/servicios/estructural/industrial/03.jpg';

const Servicios = () => {
  const view = `
    <section class="servicios hide-for-desktop">
      <div class="servicios__text">
        <h2>Nuestros Servicios</h2>
        <h3>
        Nos comprometemos a entregar la asistencia profesional que tu proyecto requiere.
        </h3>
      </div>
      
      

      <!-- ======================== BOTONERA MOBILE =====================-->
      <div class="servicios__menu">
        <a class="servicios__menu-link" href=""
          ><span>Ingeniería de Transmisión Eléctrica</span></a
        >
        <!-- ======================== MODAL ELECTRICA =====================-->
        <div class="modalMobile modal__electrica">
          <button class="modal-close">
            <i class="fas fa-times"></i>
          </button>

          <figure class="modal__electrica">

          <div class="carousel">
            <div class="carousel__button carousel__button--left is-hidden">
              <i class="che fas fa-chevron-left"></i>
            </div>
            <div class="carousel__track-container">
              <ul class="carousel__track">
                <li class="carousel__slide current-slide">
                  <img class='carousel__image' src="${electrica}" alt="Cables de alta tensión">
                </li>
                <li class="carousel__slide">
                  <img class='carousel__image' src="${electricados}" alt="Cables de alta tensión">
                </li>
                <li class="carousel__slide">
                  <img class='carousel__image' src="${electricatres}" alt="Cables de alta tensión">
                </li>
                
              </ul>
            </div>
            <div class="carousel__button carousel__button--right">
            <i class="che fas fa-chevron-right"></i>
            </div>
          </div>




            <figcaption>
              <div class="modal__title"><h3>Ingeniería de Transmisión Eléctrica.</h3></div>
              <p>
                Desarrollo y diseño de estructuras para líneas de transmisión y subestaciones eléctricas.
              </p>
              <div class="modal__list">
                <li>
                 Diseño de estructuras de transmisión basado en ASCE 10-15
                </li>
                <li>
                 Diseño de estructuras y fundaciones de soporte de equipos de subestaciones eléctricas.
                </li>
                <li>
                  Diseño de monopostes para transmisión y soporte antenas.
                </li>
              </div>
            </figcaption>
          </figure>
        </div>
        <!-- ================= / MODAL ELECTRICA ===================== -->

        <a class="servicios__menu-link" href=""
          ><span>Ingeniería Estructural</span></a
        >

        <!-- ================= MODAL ESTRUCTURAL ===================== -->
        <div class="modalMobile ">
          <button class="modal-close">
            <i class="fas fa-times"></i>
          </button>
          <figure class="figure__estructural">
            <figcaption>
              <div class="modal__title modal__estructural"><h3>Ingeniería Estructural.</h3></div>
              <p>
              Con sólida base en el área, VGE Ingeniería entrega servicios dedicados al cálculo estructural de proyectos del sector inmobiliario como también del industrial, aportando con soluciones en acero y hormigón armado, así como en la verificación estructural de los elementos que componen un sistema resistente.
              </p>
            </figcaption>
          </figure>

          <figure class="slider__estructural">
          <div class="carousel">
            <div class="carousel__button carousel__button--left carousel__button--left-inmobiliario is-hidden">
              <i class="che fas fa-chevron-left"></i>
            </div>
            <div class="carousel__track-container">
              <ul class="carousel__track carousel__track-inmobiliario">
                <li class="carousel__slide current-slide-inmobiliario">
                  <img class='carousel__image' src="${inmobiliario}" alt="Cables de alta tensión">
                </li>
                <li class="carousel__slide current-slide-einmobiliario">
                  <img class='carousel__image' src="${inmobiliariodos}" alt="Cables de alta tensión">
                </li>
                <li class="carousel__slide current-slide-inmobiliario">
                  <img class='carousel__image' src="${inmobiliariotres}" alt="Cables de alta tensión">
                </li>
              </ul>
            </div>
            <div class="carousel__button carousel__button--right carousel__button--right-inmobiliario">
              <i class="che fas fa-chevron-right"></i>
            </div>
          </div>
            <figcaption>
              <div class="modal__title"><h3>Sector Inmobiliario</h3></div>
              <p>
              Diseño y cálculo de estructuras de acero y hormigón, tanto para edificación en altura como proyectos habitacionales en extensión. 
              </p>
              <div class="modal__list">
                <li>
                Verificación structural resistente de ventanas y balcones.
                </li>
                <li>
                Cierres perimetrales.
                </li>
                <li>
                Instalación de Faena.
                </li>
                <li>
                Cálculo structural de sistemas de mitigación de ruido y polvo.
                </li>
              </div>
            </figcaption>
          </figure>

          <figure class="slider__estructural industrialSection">
          <div class="carousel">
            <div class="carousel__button carousel__button--left carousel__button--left-industrial is-hidden">
              <i class="che fas fa-chevron-left"></i>
            </div>
            <div class="carousel__track-container">
              <ul class="carousel__track carousel__track-industrial">
                <li class="carousel__slide current-slide-industrial">
                  <img class='carousel__image' src="${industrial}" alt="Cables de alta tensión">
                </li>
                <li class="carousel__slide current-slide-industrial">
                  <img class='carousel__image' src="${industrialdos}" alt="Cables de alta tensión">
                </li>
                <li class="carousel__slide current-slide-industrial">
                  <img class='carousel__image' src="${industrialtres}" alt="Cables de alta tensión">
                </li>
              </ul>
            </div>
            <div class="carousel__button carousel__button--right carousel__button--right-industrial">
              <i class="che fas fa-chevron-right"></i>
            </div>
          </div>
            <figcaption>
              <div class="modal__title"><h3>Sector Industrial</h3></div>
              <p>
              Desarrollo de proyectos de ingeniería y verificación estructural, de elementos resistentes y no resistentes. 
              </p>
              <div class="modal__list">
                <li>
                Galpones de acero y naves industriales
                </li>
                <li>
                Barandas de acero
                </li>
                <li>
                Fundaciones
                </li>
                <li>
                Cercos
                </li>
                <li>
                Plataformas de operación de equipos.
                </li>
                <li>
                Estanques.
                </li>
                <li>
                Adecuaciones de estructuras existentes.
                </li>
              </div>
            </figcaption>
          </figure>


        </div>
        <!-- =============== / MODAL ESTRUCTURA ===================  -->

        <a class="servicios__menu-link" href=""><span>Ingeniería Vial</span></a>
        <!-- ======================== MODAL VIAL =====================-->
        <div class="modalMobile modal__vial">
          <button class="modal-close">
            <i class="fas fa-times"></i>
          </button>
          <figure class="modal__electrica">
          <div class="carousel">
            <div class="carousel__button carousel__button--left carousel__button--left-vial is-hidden">
              <i class="che fas fa-chevron-left"></i>
            </div>
            <div class="carousel__track-container">
              <ul class="carousel__track carousel__track-vial">
                <li class="carousel__slide current-slide-vial">
                  <img class='carousel__image' src="${vial}" alt="Cables de alta tensión">
                </li>
                <li class="carousel__slide current-slide-vial">
                  <img class='carousel__image' src="${vialdos}" alt="Cables de alta tensión">
                </li>
                <li class="carousel__slide current-slide-vial">
                  <img class='carousel__image' src="${vialtres}" alt="Cables de alta tensión">
                </li>
                
                
              </ul>
            </div>
            <div class="carousel__button carousel__button--right carousel__button--right-vial">
            <i class="che fas fa-chevron-right"></i>
            </div>
          </div>
            <figcaption>
              <div class="modal__title"><h3>Ingeniería Vial</h3></div>
              <p>
              Desarrollo de estudios viales, abarcando íntegramente el proyecto a partir del diseño conceptual y considerando en sus distintas etapas, la implementación de las especialidades que aseguran un correcto y eficiente proyecto vial. 
              </p>
              <div class="modal__list">
                <li>
                Levantamiento de Monografías.
                </li>
                <li>
                Conteos de tránsito.
                </li>
                <li>
                Diseño Geométrico
                </li>
                <li>
                Seguridad Vial y gestión de tráfico.
                </li>
                <li>
                Diseño de Pavimentos.
                </li>
                <li>
                Saneamiento y drenaje de la plataforma.
                </li>
              </div>
            </figcaption>
          </figure>
        </div>
        <!-- ================= / MODAL ELECTRICA ===================== -->
      </div>
    </section>

    <div class="servicios-desktop hide-for-mobile">
      <div class="servicios-desktop__text">
        <h2>Nuestros Servicios</h2>
        <h3>
        Nos comprometemos a entregar la asistencia profesional que tu proyecto requiere.
        </h3>
      </div>

      <div class="servicios-desktop__cards container">
        <a href='#' data-micromodal-trigger="modal-1" id='btnModal'>
          <div class="card">
            <div class="card__image electrica">
              <div class="card__content">
                <div class="card__button">Ver más</div>
              </div>
            </div>
            <h4>Ingeniería de Transmisión Eléctrica</h4>
            <p>
              Desarrollo y diseño de estructuras para líneas de transmisión y
              subestaciones eléctricas.
            </p>
          </div>
        </a>

        <a href='#' data-micromodal-trigger="modal-2" id='btnModalEstructural'>
          <div class="card">
            <div class="card__image estructural">
              <div class="card__content">
                <div class="card__button">Ver más</div>
              </div>
            </div>
            <h4>Ingeniería Estructural</h4>
            <p>
              Con sólida base en el área, VGE Ingeniería entrega servicios
              dedicados al cálculo estructural de proyectos del sector
              inmobiliario como también del ...
            </p>
          </div>
        </a>

        <a href='#' data-micromodal-trigger="modal-2" id='btnModalVial'>
          <div class="card">
            <div class="card__image vial">
              <div class="card__content">
                <div class="card__button">Ver más</div>
              </div>
            </div>
            <h4>Ingeniería Vial</h4>
            <p>
              Desarrollo de estudios viales, abarcando íntegramente el proyecto
              a partir del diseño ...
            </p>
          </div>
        </a>
      </div>
    </div>        
  `;
  return view;
};
export default Servicios;
