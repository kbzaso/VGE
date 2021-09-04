import electrica from '@images/servicios/transmision-electrica.jpg';
const Servicios = () => {
    const view = `
    <section class="servicios hide-for-desktop">
      <div class="servicios__text">
        <h2>Nuestros Servicios</h2>
        <h3>
          Uniendo tres ramas de la Ingeniería Civil, buscamos proyectar ...
        </h3>
      </div>

      <!-- ======================== BOTONERA MOBILE =====================-->
      <div class="servicios__menu">
        <a class="servicios__menu-link" href=""
          ><span>Ingeniería de Transmisión Eléctrica</span></a
        >
        <!-- ======================== MODAL ELECTRICA =====================-->
        <div class="modal modal__electrica">
          <button class="modal-close">
            <i class="fas fa-times"></i>
          </button>
          <figure class="modal__electrica">
            <div class="modal__img">
              <img
                src="${electrica}"
                alt="Cables de electricidad de alta tensión"
              />
            </div>
            <figcaption>
              <div class="modal__title"><h3>Titulo ELECTRICA</h3></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam a
                cupiditate aperiam corrupti cumque corporis, molestiae nostrum
                dicta magnam eaque iusto doloremque ipsa, odio alias nulla
                blanditiis, inventore consequatur perspiciatis. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Quam a cupiditate
                aperiam corrupti cumque corporis, molestiae nostrum dicta magnam
                eaque iusto doloremque ipsa, odio alias nulla blanditiis,
                inventore consequatur perspiciatis.
              </p>
              <div class="modal__list">
                <li>
                  Diseño de estructuras de transmisión basado en ASCE 10-15
                </li>
                <li>
                  Diseño de estructuras de transmisión basado en ASCE 10-15
                </li>
                <li>
                  Diseño de estructuras de transmisión basado en ASCE 10-15
                </li>
              </div>
            </figcaption>
            <div class="modal__botonera">
              <button type="button">Ingeniería Estructural</button>
              <button type="button">Ingeniería Vial</button>
            </div>
          </figure>
        </div>
        <!-- ================= / MODAL ELECTRICA ===================== -->

        <a class="servicios__menu-link" href=""
          ><span>Ingeniería Estructural</span></a
        >

        <!-- ================= MODAL ESTRUCTURAL ===================== -->
        <div class="modal modal__electrica">
          <button class="modal-close">
            <i class="fas fa-times"></i>
          </button>
          <figure class="modal__estructural">
            <div class="modal__img">
              <img
                src="${electrica}"
                alt="Cables de electricidad de alta tensión"
              />
            </div>
            <figcaption>
              <div class="modal__title"><h3>ESTRUCTURAL</h3></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam a
                cupiditate aperiam corrupti cumque corporis, molestiae nostrum
                dicta magnam eaque iusto doloremque ipsa, odio alias nulla
                blanditiis, inventore consequatur perspiciatis. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Quam a cupiditate
                aperiam corrupti cumque corporis, molestiae nostrum dicta magnam
                eaque iusto doloremque ipsa, odio alias nulla blanditiis,
                inventore consequatur perspiciatis.
              </p>
              <div class="modal__list">
                <li>
                  Diseño de estructuras de transmisión basado en ASCE 10-15
                </li>
                <li>
                  Diseño de estructuras de transmisión basado en ASCE 10-15
                </li>
                <li>
                  Diseño de estructuras de transmisión basado en ASCE 10-15
                </li>
              </div>
            </figcaption>
            <div class="modal__botonera">
              <button type="button">Ingeniería Estructural</button>
              <button type="button">Ingeniería Vial</button>
            </div>
          </figure>
        </div>
        <!-- =============== / MODAL ESTRUCTURA ===================  -->

        <a class="servicios__menu-link" href=""><span>Ingeniería Vial</span></a>
        <!-- ======================== MODAL VIAL =====================-->
        <div class="modal modal__vial">
          <button class="modal-close">
            <i class="fas fa-times"></i>
          </button>
          <figure class="modal__electrica">
            <div class="modal__img">
              <img
                src="${electrica}"
                alt="Cables de electricidad de alta tensión"
              />
            </div>
            <figcaption>
              <div class="modal__title"><h3>Ingeniería Vial</h3></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam a
                cupiditate aperiam corrupti cumque corporis, molestiae nostrum
                dicta magnam eaque iusto doloremque ipsa, odio alias nulla
                blanditiis, inventore consequatur perspiciatis. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Quam a cupiditate
                aperiam corrupti cumque corporis, molestiae nostrum dicta magnam
                eaque iusto doloremque ipsa, odio alias nulla blanditiis,
                inventore consequatur perspiciatis.
              </p>
              <div class="modal__list">
                <li>
                  Diseño de estructuras de transmisión basado en ASCE 10-15
                </li>
                <li>
                  Diseño de estructuras de transmisión basado en ASCE 10-15
                </li>
                <li>
                  Diseño de estructuras de transmisión basado en ASCE 10-15
                </li>
              </div>
            </figcaption>
            <div class="modal__botonera">
              <button type="button">Ingeniería Estructural</button>
              <button type="button">Ingeniería Vial</button>
            </div>
          </figure>
        </div>
        <!-- ================= / MODAL ELECTRICA ===================== -->
      </div>
    </section>

    <div class="servicios-desktop hide-for-mobile">
      <div class="servicios-desktop__text">
        <h2>Nuestros Servicios</h2>
        <h3>
          Uniendo tres ramas de la Ingeniería Civil, buscamos proyectar nuestra
          nueva propuesta como ...
        </h3>
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
            <p>
              Desarrollo y diseño de estructuras para líneas de transmisión y
              subestaciones eléctricas.
            </p>
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
            <p>
              Con sólida base en el área, VGE Ingeniería entrega servicios
              dedicados al cálculo estructural de proyectos del sector
              inmobiliario como también del ...
            </p>
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