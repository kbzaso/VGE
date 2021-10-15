import electrica from '@images/servicios/electrica/01.jpg';
import vial from '@images/servicios/vial/01.jpg';
import inmobiliario from '@images/servicios/estructural/inmobiliario/01.jpg';

const serviciosDesktop = () => {
  const view = `
    <!-- [MODAL ELECTRICA DESKTOP] -->
    <div class="modal micromodal-slide" id="modal-1" aria-hidden="true">
      <div class="modal__overlay" tabindex="-1" data-micromodal-close>
        <div
          class="modal__container"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-1-title"
        >
          <div class="modalDesktop">
            <button class="modal-close" id="closeElectrica">
              <i class="fas fa-times"></i>
            </button>

            <div class="sliderDesktop">
              <figure class="modal__electrica">
                <div class="carousel">
                  <!-- <div class="carousel__button carousel__button--left-desktop-electrica is-hidden">
                    <i class="che fas fa-chevron-left"></i>
                </div> -->
                  <div class="carousel__track-container">
                    <ul class="carousel__track-desktop-electrica">
                      <li class="carousel__slide current-slide">
                        <img
                          class="carousel__image"
                          src="${electrica}"
                          alt="Cables de alta tensión"
                        />
                      </li>
                    </ul>
                  </div>
                  <!-- <div class="carousel__button carousel__button--right-desktop-electrica">
                    <i class="che fas fa-chevron-right"></i>
                </div> -->
                </div>
              </figure>
            </div>
            <div class="descDesktop">
              <figcaption>
                <div class="modal__title">
                  <h3>Ingeniería de Transmisión Eléctrica.</h3>
                </div>
                <p>
                  Desarrollo y diseño de estructuras para líneas de transmisión
                  y subestaciones eléctricas.
                </p>
                <div class="modal__list">
                  <li>
                    Diseño de estructuras de transmisión basado en ASCE 10-15
                  </li>
                  <li>
                    Diseño de estructuras y fundaciones de soporte de equipos de
                    subestaciones eléctricas.
                  </li>
                  <li>
                    Diseño de monopostes para transmisión y soporte antenas.
                  </li>
                </div>
              </figcaption>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- [MODAL ESTRUCTURAL DESKTOP] -->
    <div class="modal micromodal-slide" id="modal-2" aria-hidden="true">
      <div class="modal__overlay" tabindex="-1" data-micromodal-close>
        <div
          class="modal__container"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-1-title"
        >
        <div class="modalDesktop">
        <button class="modal-close" id="closeEstructural">
          <i class="fas fa-times"></i>
        </button>

        <div class="sliderDesktop">
          <figure class="modal__electrica">
            <div class="carousel">
              <!-- <div class="carousel__button carousel__button--left-desktop-electrica is-hidden">
                <i class="che fas fa-chevron-left"></i>
            </div> -->
              <div class="carousel__track-container">
                <ul class="carousel__track-desktop-electrica">
                  <li class="carousel__slide current-slide">
                    <img
                      class="carousel__image"
                      src="${inmobiliario}"
                      alt="Cables de alta tensión"
                    />
                  </li>
                </ul>
              </div>
              <!-- <div class="carousel__button carousel__button--right-desktop-electrica">
                <i class="che fas fa-chevron-right"></i>
            </div> -->
            </div>
          </figure>
        </div>
        <div class="descDesktop">
        <figcaption>
            <div class="modal__title"><h3>Ingeniería Estructural</h3></div>
            <p>
            Con sólida base en el área, VGE Ingeniería entrega servicios dedicados al cálculo estructural de proyectos del sector inmobiliario como también del industrial, aportando con soluciones en acero y hormigón armado, así como en la verificación estructural de los elementos que componen un sistema resistente.
            </p>
            
            <div class="modal__list">
               
            </div>
        </figcaption>
        </div>
      </div>
        
        </div>
      </div>
    </div>

    <!-- [MODAL VIAL DESKTOP] -->
    <div class="modal micromodal-slide" id="modal-3" aria-hidden="true">
      <div class="modal__overlay" tabindex="-1" data-micromodal-close>
        <div
          class="modal__container"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-1-title"
        >
        <div class="modalDesktop">
        <button class="modal-close" id="closeVial">
          <i class="fas fa-times"></i>
        </button>

        <div class="sliderDesktop">
          <figure class="modal__vial">
            <div class="carousel">
              <!-- <div class="carousel__button carousel__button--left-desktop-electrica is-hidden">
                <i class="che fas fa-chevron-left"></i>
            </div> -->
            <div class="carousel__track-container">
            <ul class="carousel__track carousel__track-vial">
              <li class="carousel__slide current-slide-vial">
                <img class='carousel__image' src="${vial}" alt="Cables de alta tensión">
              </li>
            </ul>
          </div>
              <!-- <div class="carousel__button carousel__button--right-desktop-electrica">
                <i class="che fas fa-chevron-right"></i>
            </div> -->
            </div>
          </figure>
        </div>
        <div class="descDesktop">
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
        </div>
      </div>
        </div>
      </div>
    </div>
  `;
  return view;
};

export default serviciosDesktop;
