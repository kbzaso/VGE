import electrica from '@images/servicios/electrica/01.jpg';
import electricaImgDos from '@images/servicios/electrica/02.jpg';
import electricaImgTres from '@images/servicios/electrica/03.jpg';
import vial from '@images/servicios/vial/01.jpg';
import vialDos from '@images/servicios/vial/02.jpg';
import vialTres from '@images/servicios/vial/03.jpg';
import estructural from '@images/servicios/estructural/01.jpg';
import estructuralDos from '@images/servicios/estructural/02.jpg';
import estructuralTres from '@images/servicios/estructural/03.jpg';
import inmobiliario from '@images/servicios/estructural/inmobiliario/01.jpg';
import inmobiliarioDos from '@images/servicios/estructural/inmobiliario/02.jpg';
import inmobiliarioTres from '@images/servicios/estructural/inmobiliario/03.jpg';
import industrial from '@images/servicios/estructural/industrial/01.jpg';
import industrialDos from '@images/servicios/estructural/industrial/02.jpg';
import industrialTres from '@images/servicios/estructural/industrial/03.jpg';

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
                   <div class="carousel__button btn__electricaDesktop--left is-hidden">
                      <i class="che fas fa-chevron-left"></i>
                    </div> 
                  <div class="carousel__track-container">
                    <ul class="carousel__track-desktop-electrica">
                      <li class="carousel__slide current-card">
                        <img
                          class="carousel__image"
                          src="${electrica}"
                          alt="Cables de alta tensi??n"
                        />
                      </li>
                      <li class="carousel__slide">
                        <img
                          class="carousel__image"
                          src="${electricaImgDos}"
                          alt="Cables de alta tensi??n"
                        />
                      </li>
                      <li class="carousel__slide">
                        <img
                          class="carousel__image"
                          src="${electricaImgTres}"
                          alt="Cables de alta tensi??n"
                        />
                      </li>
                    </ul>
                  </div>
                   <div class="carousel__button carousel__button--right btn__electricaDesktop--right">
                    <i class="che fas fa-chevron-right"></i>
                </div> 
                </div>
              </figure>
            </div>
            <div class="descDesktop">
              <figcaption>
                <div class="modal__title">
                  <h3>Ingenier??a de Transmisi??n El??ctrica.</h3>
                </div>
                <p>
                  Desarrollo y dise??o de estructuras para l??neas de transmisi??n
                  y subestaciones el??ctricas.
                </p>
                <div class="modal__list">
                  <li>
                    Dise??o de estructuras de transmisi??n basado en ASCE 10-15
                  </li>
                  <li>
                    Dise??o de estructuras y fundaciones de soporte de equipos de
                    subestaciones el??ctricas.
                  </li>
                  <li>
                    Dise??o de monopostes para transmisi??n y soporte antenas.
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
                  <div class="carousel__button carousel__button--left-desktop-estructural is-hidden">
                <i class="che fas fa-chevron-left"></i>
            </div>
                  <div class="carousel__track-container">
                    <ul class="carousel__track-desktop-estructural">
                      <li class="carousel__slide current-card">
                        <img
                          class="carousel__image"
                          src="${estructural}"
                          alt="Cables de alta tensi??n"
                        />
                      </li>
                      <li class="carousel__slide current-card">
                        <img
                          class="carousel__image"
                          src="${estructuralDos}"
                          alt="Cables de alta tensi??n"
                        />
                      </li>
                      <li class="carousel__slide current-card">
                        <img
                          class="carousel__image"
                          src="${estructuralTres}"
                          alt="Cables de alta tensi??n"
                        />
                      </li>
                    </ul>
                  </div>
                   <div class="carousel__button carousel__button--right-desktop-estructural">
                       <i class="che fas fa-chevron-right"></i>
                  </div> 
                </div>
              </figure>
            </div>
            <div class="descDesktop">
              <figcaption>
                <div class="modal__title"><h3>Ingenier??a Estructural</h3></div>
                <p>
                  Con s??lida base en el ??rea, VGE Ingenier??a entrega servicios
                  dedicados al c??lculo estructural de proyectos del sector
                  inmobiliario como tambi??n del industrial, aportando con
                  soluciones en acero y hormig??n armado, as?? como en la
                  verificaci??n estructural de los elementos que componen un
                  sistema resistente.
                </p>
                <div class="modal__botonera">
                  <button class="form__button modal__servicios__button">
                    Sector Inmobiliario
                  </button>
                  <button class="form__button modal__servicios__button">
                    Sector Industrial
                  </button>
                </div>
              </figcaption>
            </div>
          </div>
        </div>
      </div>
    </div>

    




    <!-- [MODAL INMOBILIARIO DESKTOP] -->
    <div class="modal micromodal-slide" id="modal-4" aria-hidden="true">
      <div class="modal__overlay" tabindex="-1" data-micromodal-close>
        <div
          class="modal__container"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-1-title"
        >
          <div class="modalDesktop">
            <button class="modal-close" id="closeInmobiliario">
              <i class="fas fa-times"></i>
            </button>

            <div class="sliderDesktop">
              <figure class="modal__electrica">
                <div class="carousel">
                   <div class="carousel__button carousel__button--left-desktop-inmobiliario is-hidden">
                    <i class="che fas fa-chevron-left"></i>
                  </div>
                  <div class="carousel__track-container">
                    <ul class="carousel__track-desktop-inmobiliario">
                      <li class="carousel__slide current-card">
                        <img
                          class="carousel__image"
                          src="${inmobiliario}"
                          alt="Cables de alta tensi??n"
                        />
                      </li>
                      <li class="carousel__slide current-slide">
                        <img
                          class="carousel__image"
                          src="${inmobiliarioDos}"
                          alt="Cables de alta tensi??n"
                        />
                      </li>
                      <li class="carousel__slide current-slide">
                        <img
                          class="carousel__image"
                          src="${inmobiliarioTres}"
                          alt="Cables de alta tensi??n"
                        />
                      </li>
                    </ul>
                  </div>
                  <div class="carousel__button carousel__button--right-desktop-inmobiliario">
                    <i class="che fas fa-chevron-right"></i>
                  </div>
                </div>
              </figure>
            </div>
            <div class="descDesktop">
              <figcaption>
                <div class="modal__title"><h3>Sector Inmobiliario.</h3></div>
                <p>
                  Dise??o y c??lculo de estructuras de acero y hormig??n, tanto
                  para edificaci??n en altura como proyectos habitacionales en
                  extensi??n.
                </p>
                <div class="modal__list">
                  <ul>
                    <li>
                      Verificaci??n structural resistente de ventanas y balcones.
                    </li>
                    <li> Cierres perimetrales.</li>
                    <li> Instalaci??n de Faena.</li>
                    <li>
                      C??lculo structural de sistemas de mitigaci??n de ruido y
                      polvo.
                    </li>
                  </ul>
                  <div class="modal__botonera">
                    <button class="form__button modal__servicios__button" id="modal__back__inmobiliario">
                    <i class="che fas fa-chevron-left"></i> Volver
                    </button>
                  </div>
                </div>
              </figcaption>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- [MODAL INDUSTRIAL DESKTOP] -->
    <div class="modal micromodal-slide" id="modal-5" aria-hidden="true">
      <div class="modal__overlay" tabindex="-1" data-micromodal-close>
        <div
          class="modal__container"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-1-title"
        >
          <div class="modalDesktop">
            <button class="modal-close" id="closeIndustrial">
              <i class="fas fa-times"></i>
            </button>

            <div class="sliderDesktop">
              <figure class="modal__electrica">
                <div class="carousel">
                  <div class="carousel__button carousel__button--left-desktop-industrial is-hidden">
                    <i class="che fas fa-chevron-left"></i>
                  </div>
                  <div class="carousel__track-container">
                    <ul class="carousel__track-desktop-industrial">
                      <li class="carousel__slide current-card">
                        <img
                          class="carousel__image"
                          src="${industrial}"
                          alt="Cables de alta tensi??n"
                        />
                      </li>
                      <li class="carousel__slide current-slide">
                        <img
                          class="carousel__image"
                          src="${industrialDos}"
                          alt="Cables de alta tensi??n"
                        />
                      </li>
                      <li class="carousel__slide current-slide">
                        <img
                          class="carousel__image"
                          src="${industrialTres}"
                          alt="Cables de alta tensi??n"
                        />
                      </li>
                    </ul>
                  
                  </div>
                  <div class="carousel__button carousel__button--right-desktop-industrial">
                    <i class="che fas fa-chevron-right"></i>
                  </div>
                </div>
              </figure>
            </div>
            <div class="descDesktop">
              <figcaption>
                <div class="modal__title"><h3>Sector Industrial.</h3></div>
                <p>
                Desarrollo de proyectos de ingenier??a y verificaci??n estructural, de elementos resistentes y no resistentes. 
                </p>
                <div class="modal__list">
                  <ul>
                    <li>
                    Galpones de acero y naves industriales
                    </li>
                    <li> Barandas de acero.</li>
                    <li> Fundaciones.</li>
                    <li>
                    Cercos.
                    </li>
                    <li>
                    Plataformas de operaci??n de equipos.
                    </li>
                    <li>
                    Estanques.
                    </li>
                    <li>
                    Adecuaciones de estructuras existentes.
                    </li>
                  </ul>
                  <div class="modal__botonera">
                    <button class="form__button modal__servicios__button" id="modal__back__industrial">
                    <i class="fas fa-arrow-left"></i> Volver
                    </button>
                  </div>
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
                <div class="carousel__button carousel__button--left-desktop-vial is-hidden">
                  <i class="che fas fa-chevron-left"></i>
                </div>
                  <div class="carousel__track-container">
                    <ul class="carousel__track carousel__track-desktop-vial">
                      <li class="carousel__slide current-card">
                        <img
                          class="carousel__image"
                          src="${vial}"
                          alt="Cables de alta tensi??n"
                        />
                      </li>
                      <li class="carousel__slide current-card">
                        <img
                          class="carousel__image"
                          src="${vialDos}"
                          alt="Cables de alta tensi??n"
                        />
                      </li>
                      <li class="carousel__slide current-slide-vial">
                        <img
                          class="carousel__image"
                          src="${vialTres}"
                          alt="Cables de alta tensi??n"
                        />
                      </li>
                    </ul>
                  </div>
                  <div class="carousel__button carousel__button--right-desktop-vial">
                    <i class="che fas fa-chevron-right"></i>
                  </div>
                </div>
              </figure>
            </div>
            <div class="descDesktop">
              <figcaption>
                <div class="modal__title"><h3>Ingenier??a Vial</h3></div>
                <p>
                  Desarrollo de estudios viales, abarcando ??ntegramente el
                  proyecto a partir del dise??o conceptual y considerando en sus
                  distintas etapas, la implementaci??n de las especialidades que
                  aseguran un correcto y eficiente proyecto vial.
                </p>
                <div class="modal__list">
                  <ul>
                    <li> Levantamiento de Monograf??as.</li>
                    <li> Conteos de tr??nsito.</li>
                    <li> Dise??o Geom??trico</li>
                    <li> Seguridad Vial y gesti??n de tr??fico.</li>
                    <li> Dise??o de Pavimentos.</li>
                    <li> Saneamiento y drenaje de la plataforma.</li>
                  </ul>
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
