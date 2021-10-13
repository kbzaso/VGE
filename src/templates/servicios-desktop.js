import electrica from '@images/servicios/electrica/01.jpg';
import electricados from '@images/servicios/electrica/02.jpg';
import electricatres from '@images/servicios/electrica/03.jpg';

const ServiciosDesktop = () => {
  const view = `
  <div class="modal-bg">
    <div class="modal__electrica">

    <button id='modal__electrica--btn' class="modal-close">
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


    </div>
  </div>
  `;
  return view;
};
export default ServiciosDesktop;
