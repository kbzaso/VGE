import Nav from '@templates/nav.js';
import Header from '@templates/header.js';
import QuienesSomos from '@templates/quienes-somos.js';
import Servicios from '@templates/servicios.js';
import ServiciosDesktop from '@templates/serviciosDesktop.js';
import Preferirnos from '@templates/preferirnos.js';
import Contacto from '@templates/contacto.js';
import Footer from '@templates/footer.js';
import '@styles/main.scss';

import MicroModal from 'micromodal';

(function App() {
  const nav = null || document.getElementById('nav');
  const header = null || document.getElementById('header');
  const qs = null || document.getElementById('quienes-somos');
  const servicios = null || document.getElementById('servicios');
  const serviciosdesktop = null || document.getElementById('serviciosDesktop');
  const preferirnos = null || document.getElementById('preferirnos');
  const contacto = null || document.getElementById('contacto');
  const footer = null || document.getElementById('footer');
  nav.innerHTML = Nav();
  header.innerHTML = Header();
  qs.innerHTML = QuienesSomos();
  servicios.innerHTML = Servicios();
  serviciosdesktop.innerHTML = ServiciosDesktop();
  preferirnos.innerHTML = Preferirnos();
  contacto.innerHTML = Contacto();
  footer.innerHTML = Footer();
})();

// MENU MOBILE
const btnHamburger = document.getElementById('btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');

btnHamburger.addEventListener('click', function (e) {
  if (header.classList.contains('open')) {
    e.preventDefault();
    header.classList.remove('open');
    overlay.classList.remove('slide-in');
    overlay.classList.add('slide-out');
  } else {
    e.preventDefault();
    header.classList.add('open');
    overlay.classList.add('slide-in');
    overlay.classList.remove('slide-out');
  }
});

const qsBoton = document.getElementById('qs-btn');
qsBoton.addEventListener('click', function (e) {
  if (header.classList.contains('open')) {
    header.classList.remove('open');
    overlay.classList.remove('slide-in');
    overlay.classList.add('slide-out');
  } else {
    header.classList.add('open');
    overlay.classList.add('slide-in');
    overlay.classList.remove('slide-out');
  }
});

const contactoBoton = document.getElementById('contacto-btn');
contactoBoton.addEventListener('click', function (e) {
  if (header.classList.contains('open')) {
    header.classList.remove('open');
    overlay.classList.remove('slide-in');
    overlay.classList.add('slide-out');
  } else {
    header.classList.add('open');
    overlay.classList.add('slide-in');
    overlay.classList.remove('slide-out');
  }
});

const servicioBoton = document.getElementById('servicios-btn');
servicioBoton.addEventListener('click', function (e) {
  console.log('Works!');
  if (header.classList.contains('open')) {
    header.classList.remove('open');
    overlay.classList.remove('slide-in');
    overlay.classList.add('slide-out');
  } else {
    header.classList.add('open');
    overlay.classList.add('slide-in');
    overlay.classList.remove('slide-out');
  }
});

// PREFERIRNOS SLIDER
const track = document.querySelector('.preferirnos__cards');
const slides = Array.from(track.children);

// BOTONES DE DESPLAZAMIENTO
const nextButton = document.querySelector('.preferirnos__botonera--right');
const prevButton = document.querySelector('.preferirnos__botonera--left');

// // CIRCULOS DE DESPLAZAMIENTO
const dotNav = document.querySelector('.preferirnos__nav');
const dots = Array.from(dotNav.children);

// // CAPTURAMOS EL ANCHO DE LOS SLIDES
const slideWidth = slides[0].getBoundingClientRect().width;

// // COLOCAR UN SLIDE AL LADO DEL OTRO
const setSlidePosition = (slides, index) => {
  slides.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-card');
  targetSlide.classList.add('current-card');
};

// UPDATE DOTS
const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove('current-indicator');
  targetDot.classList.add('current-indicator');
};

// HIDE ARROWS
const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
  if (targetIndex === 0) {
    prevButton.classList.add('is-hidden');
    nextButton.classList.remove('is-hidden');
  } else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove('is-hidden');
    nextButton.classList.add('is-hidden');
  } else {
    prevButton.classList.remove('is-hidden');
    nextButton.classList.remove('is-hidden');
  }
};

// CUANDO HAYA UN CLICK SE MUEVA AL SLIDE DE LA DERECHA
nextButton.addEventListener('click', (e) => {
  const currentSlide = track.querySelector('.current-card');
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotNav.querySelector('.current-indicator');
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex((slide) => slide === nextSlide);

  // MOVER HACIA EL SIGUIENTE SLIDE
  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);

  hideShowArrows(slides, prevButton, nextButton, nextIndex);
});

prevButton.addEventListener('click', (e) => {
  const currentSlide = track.querySelector('.current-card');
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotNav.querySelector('.current-indicator');
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slides.findIndex((slide) => slide === prevSlide);

  // MOVER HACIA EL SIGUIENTE SLIDE
  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
  hideShowArrows(slides, prevButton, nextButton, prevIndex);
});

// CUANDO HAGO CLICL EN LOS INDICADORES, SE MOVERA AL SLIDE
dotNav.addEventListener('click', (e) => {
  // QUE INDICADOR FUE CLICKEADO?
  const targetDot = e.target.closest('button');
  if (!targetDot) return;

  const currentSlide = track.querySelector('.current-card');
  const currentDot = dotNav.querySelector('.current-indicator');

  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  // console.log(targetIndex);
  hideShowArrows(slides, prevButton, nextButton, targetIndex);
});

// MODAL
const serviciosContainer = document.getElementById('servicios');
// console.log(serviciosContainer);
serviciosContainer.addEventListener('click', (e) => {
  //   console.log(e);
  e.preventDefault();
  const modalToggle = e.target.closest('.servicios__menu-link');
  console.log(modalToggle);

  if (!modalToggle) return;
  const modal = modalToggle.nextElementSibling;
  const closeButton = modal.querySelector('.modal-close');

  const modalOpen = (_) => {
    modal.classList.add('is-open');
    modal.style.animation = 'modalIn 300ms forwards';
    document.body.style.overflowY = 'hidden';
  };

  modalOpen();

  const modalClose = (_) => {
    modal.classList.remove('is-open');
    modal.removeEventListener('animationend', modalClose);
    document.body.style.overflowY = 'scroll';
  };

  closeButton.addEventListener('click', (_) => {
    // modal.classList.remove('is-open');
    modal.style.animation = 'modalOut 300ms forwards';
    modal.addEventListener('animationend', modalClose);
  });

  const quienesSomosMenu = document.getElementById('qs-btn');
  const serviciosMenu = document.getElementById('servicios-btn');
  const contactoMenu = document.getElementById('contacto-btn');
  const logoMenu = document.getElementById('logo-header');

  quienesSomosMenu.addEventListener('click', (_) => {
    modal.style.animation = 'modalOut 300ms forwards';
    modal.addEventListener('animationend', modalClose);
  });
  serviciosMenu.addEventListener('click', (_) => {
    modal.style.animation = 'modalOut 300ms forwards';
    modal.addEventListener('animationend', modalClose);
  });
  contactoMenu.addEventListener('click', (_) => {
    modal.style.animation = 'modalOut 300ms forwards';
    modal.addEventListener('animationend', modalClose);
  });
  logoMenu.addEventListener('click', (_) => {
    modal.style.animation = 'modalOut 300ms forwards';
    modal.addEventListener('animationend', modalClose);
  });

  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 27) {
      modal.style.animation = 'modalOut 300ms forwards';
      modal.addEventListener('animationend', modalClose);
      document.body.style.overflowY = 'scroll';
    }
  });
});

// ELECTRICA SLIDER
const trackModal = document.querySelector('.carousel__track');
const slidesModal = Array.from(trackModal.children);

// BOTONES DE DESPLAZAMIENTO
const nextButtonModal = document.querySelector('.carousel__button--right');
const prevButtonModal = document.querySelector('.carousel__button--left');

// // CAPTURAMOS EL ANCHO DE LOS SLIDES
const slideWidthModal = slidesModal[0].getBoundingClientRect().width;

slidesModal.forEach((s, i) => {
  s.style.left = slideWidthModal * i + 'px';
});

const moveToSlideModal = (trackModal, currentSlideModal, targetSlideModal) => {
  trackModal.style.transform =
    'translateX(-' + targetSlideModal.style.left + ')';
  currentSlideModal.classList.remove('current-slide');
  targetSlideModal.classList.add('current-slide');
};

const hideShowArrowsModal = (
  slidesModal,
  prevButtonModal,
  nextButtonModal,
  targetIndexModal
) => {
  if (targetIndexModal === 0) {
    prevButtonModal.classList.add('is-hidden');
    nextButtonModal.classList.remove('is-hidden');
  } else if (targetIndexModal === slidesModal.length - 1) {
    prevButtonModal.classList.remove('is-hidden');
    nextButtonModal.classList.add('is-hidden');
  } else {
    prevButtonModal.classList.remove('is-hidden');
    nextButtonModal.classList.remove('is-hidden');
  }
};

nextButtonModal.addEventListener('click', (e) => {
  const currentSlideModal = trackModal.querySelector('.current-slide');
  const nextSlideModal = currentSlideModal.nextElementSibling;
  const nextIndexModal = slidesModal.findIndex(
    (slide) => slide === nextSlideModal
  );

  moveToSlideModal(trackModal, currentSlideModal, nextSlideModal);
  hideShowArrowsModal(
    slidesModal,
    prevButtonModal,
    nextButtonModal,
    nextIndexModal
  );
});

prevButtonModal.addEventListener('click', (e) => {
  const currentSlideModal = trackModal.querySelector('.current-slide');
  const prevSlideModal = currentSlideModal.previousElementSibling;
  const prevIndexModal = slidesModal.findIndex(
    (slide) => slide === prevSlideModal
  );

  moveToSlideModal(trackModal, currentSlideModal, prevSlideModal);
  hideShowArrowsModal(
    slidesModal,
    prevButtonModal,
    nextButtonModal,
    prevIndexModal
  );
});

// VIAL SLIDER
const trackModalVial = document.querySelector('.carousel__track-vial');
const slidesModalVial = Array.from(trackModalVial.children);
console.log(slidesModalVial);
// BOTONES DE DESPLAZAMIENTO
const nextButtonModalVial = document.querySelector(
  '.carousel__button--right-vial'
);
const prevButtonModalVial = document.querySelector(
  '.carousel__button--left-vial'
);

// // CAPTURAMOS EL ANCHO DE LOS SLIDES
const slideWidthModalVial = slidesModalVial[0].getBoundingClientRect().width;

slidesModalVial.forEach((s, i) => {
  s.style.left = slideWidthModalVial * i + 'px';
});

const moveToSlideModalVial = (
  trackModalVial,
  currentSlideModalVial,
  targetSlideModalVial
) => {
  trackModalVial.style.transform =
    'translateX(-' + targetSlideModalVial.style.left + ')';
  currentSlideModalVial.classList.remove('current-slide-vial');
  targetSlideModalVial.classList.add('current-slide-vial');
};

const hideShowArrowsModalVial = (
  slidesModalVial,
  prevButtonModalVial,
  nextButtonModalVial,
  targetIndexModalVial
) => {
  if (targetIndexModalVial === 0) {
    prevButtonModalVial.classList.add('is-hidden');
    nextButtonModalVial.classList.remove('is-hidden');
  } else if (targetIndexModalVial === slidesModalVial.length - 1) {
    prevButtonModalVial.classList.remove('is-hidden');
    nextButtonModalVial.classList.add('is-hidden');
  } else {
    prevButtonModalVial.classList.remove('is-hidden');
    nextButtonModalVial.classList.remove('is-hidden');
  }
};

nextButtonModalVial.addEventListener('click', (e) => {
  const currentSlideModalVial = trackModalVial.querySelector(
    '.current-slide-vial'
  );
  const nextSlideModalVial = currentSlideModalVial.nextElementSibling;
  const nextIndexModalVial = slidesModalVial.findIndex(
    (slide) => slide === nextSlideModalVial
  );

  moveToSlideModalVial(
    trackModalVial,
    currentSlideModalVial,
    nextSlideModalVial
  );
  hideShowArrowsModalVial(
    slidesModalVial,
    prevButtonModalVial,
    nextButtonModalVial,
    nextIndexModalVial
  );
});

prevButtonModalVial.addEventListener('click', (e) => {
  const currentSlideModalVial = trackModalVial.querySelector(
    '.current-slide-vial'
  );
  const prevSlideModalVial = currentSlideModalVial.previousElementSibling;
  const prevIndexModalVial = slidesModalVial.findIndex(
    (slide) => slide === prevSlideModalVial
  );

  moveToSlideModalVial(
    trackModalVial,
    currentSlideModalVial,
    prevSlideModalVial
  );
  hideShowArrowsModalVial(
    slidesModalVial,
    prevButtonModalVial,
    nextButtonModalVial,
    prevIndexModalVial
  );
});

// ESTRUCTURAL INMOBILIARIO SLIDER
const trackModalInmobiliario = document.querySelector(
  '.carousel__track-inmobiliario'
);
const slidesModalInmobiliario = Array.from(trackModalInmobiliario.children);
console.log(slidesModalInmobiliario);
// BOTONES DE DESPLAZAMIENTO
const nextButtonModalInmobiliario = document.querySelector(
  '.carousel__button--right-inmobiliario'
);
const prevButtonModalInmobiliario = document.querySelector(
  '.carousel__button--left-inmobiliario'
);

// // CAPTURAMOS EL ANCHO DE LOS SLIDES
const slideWidthModalInmobiliario =
  slidesModalInmobiliario[0].getBoundingClientRect().width;

slidesModalInmobiliario.forEach((s, i) => {
  s.style.left = slideWidthModalInmobiliario * i + 'px';
});

const moveToSlideModalInmobiliario = (
  trackModalInmobiliario,
  currentSlideModalInmobiliario,
  targetSlideModalInmobiliario
) => {
  trackModalInmobiliario.style.transform =
    'translateX(-' + targetSlideModalInmobiliario.style.left + ')';
  currentSlideModalInmobiliario.classList.remove('current-slide-inmobiliario');
  targetSlideModalInmobiliario.classList.add('current-slide-inmobiliario');
};

const hideShowArrowsModalInmobiliario = (
  slidesModalInmobiliario,
  prevButtonModalInmobiliario,
  nextButtonModalInmobiliario,
  targetIndexModalInmobiliario
) => {
  if (targetIndexModalInmobiliario === 0) {
    prevButtonModalInmobiliario.classList.add('is-hidden');
    nextButtonModalInmobiliario.classList.remove('is-hidden');
  } else if (
    targetIndexModalInmobiliario ===
    slidesModalInmobiliario.length - 1
  ) {
    prevButtonModalInmobiliario.classList.remove('is-hidden');
    nextButtonModalInmobiliario.classList.add('is-hidden');
  } else {
    prevButtonModalInmobiliario.classList.remove('is-hidden');
    nextButtonModalInmobiliario.classList.remove('is-hidden');
  }
};

nextButtonModalInmobiliario.addEventListener('click', (e) => {
  const currentSlideModalInmobiliario = trackModalInmobiliario.querySelector(
    '.current-slide-inmobiliario'
  );
  const nextSlideModalInmobiliario =
    currentSlideModalInmobiliario.nextElementSibling;
  const nextIndexModalInmobiliario = slidesModalInmobiliario.findIndex(
    (slide) => slide === nextSlideModalInmobiliario
  );

  moveToSlideModalInmobiliario(
    trackModalInmobiliario,
    currentSlideModalInmobiliario,
    nextSlideModalInmobiliario
  );
  hideShowArrowsModalInmobiliario(
    slidesModalInmobiliario,
    prevButtonModalInmobiliario,
    nextButtonModalInmobiliario,
    nextIndexModalInmobiliario
  );
});

prevButtonModalInmobiliario.addEventListener('click', (e) => {
  const currentSlideModalInmobiliario = trackModalInmobiliario.querySelector(
    '.current-slide-inmobiliario'
  );
  const prevSlideModalInmobiliario =
    currentSlideModalInmobiliario.previousElementSibling;
  const prevIndexModalInmobiliario = slidesModalInmobiliario.findIndex(
    (slide) => slide === prevSlideModalInmobiliario
  );

  moveToSlideModalInmobiliario(
    trackModalInmobiliario,
    currentSlideModalInmobiliario,
    prevSlideModalInmobiliario
  );
  hideShowArrowsModalInmobiliario(
    slidesModalInmobiliario,
    prevButtonModalInmobiliario,
    nextButtonModalInmobiliario,
    prevIndexModalInmobiliario
  );
});

// ESTRUCTURAL INDUSTRIAL SLIDER
const trackModalIndustrial = document.querySelector(
  '.carousel__track-industrial'
);
const slidesModalIndustrial = Array.from(trackModalIndustrial.children);
console.log(slidesModalIndustrial);
// BOTONES DE DESPLAZAMIENTO
const nextButtonModalIndustrial = document.querySelector(
  '.carousel__button--right-industrial'
);
const prevButtonModalIndustrial = document.querySelector(
  '.carousel__button--left-industrial'
);

// // CAPTURAMOS EL ANCHO DE LOS SLIDES
const slideWidthModalIndustrial =
  slidesModalIndustrial[0].getBoundingClientRect().width;

console.log(slideWidthModalIndustrial);
console.log(slideWidthModalInmobiliario);
console.log(slideWidthModalVial);
console.log(slideWidth);
slidesModalIndustrial.forEach((s, i) => {
  s.style.left = slideWidthModalIndustrial * i + 'px';
});

const moveToSlideModalIndustrial = (
  trackModalIndustrial,
  currentSlideModalIndustrial,
  targetSlideModalIndustrial
) => {
  trackModalIndustrial.style.transform =
    'translateX(-' + targetSlideModalIndustrial.style.left + ')';
  currentSlideModalIndustrial.classList.remove('current-slide-industrial');
  targetSlideModalIndustrial.classList.add('current-slide-industrial');
};

const hideShowArrowsModalIndustrial = (
  slidesModalIndustrial,
  prevButtonModalIndustrial,
  nextButtonModalIndustrial,
  targetIndexModalIndustrial
) => {
  if (targetIndexModalIndustrial === 0) {
    prevButtonModalIndustrial.classList.add('is-hidden');
    nextButtonModalIndustrial.classList.remove('is-hidden');
  } else if (targetIndexModalIndustrial === slidesModalIndustrial.length - 1) {
    prevButtonModalIndustrial.classList.remove('is-hidden');
    nextButtonModalInmobiliario.classList.add('is-hidden');
  } else {
    prevButtonModalIndustrial.classList.remove('is-hidden');
    nextButtonModalIndustrial.classList.remove('is-hidden');
  }
};

nextButtonModalIndustrial.addEventListener('click', (e) => {
  const currentSlideModalIndustrial = trackModalIndustrial.querySelector(
    '.current-slide-industrial'
  );
  const nextSlideModalIndustrial =
    currentSlideModalIndustrial.nextElementSibling;
  const nextIndexModalIndustrial = slidesModalIndustrial.findIndex(
    (slide) => slide === nextSlideModalIndustrial
  );

  moveToSlideModalIndustrial(
    trackModalIndustrial,
    currentSlideModalIndustrial,
    nextSlideModalIndustrial
  );
  hideShowArrowsModalIndustrial(
    slidesModalIndustrial,
    prevButtonModalIndustrial,
    nextButtonModalIndustrial,
    prevIndexModalIndustrial
  );
});

prevButtonModalIndustrial.addEventListener('click', (e) => {
  const currentSlideModalIndustrial = trackModalIndustrial.querySelector(
    '.current-slide-industrial'
  );
  const prevSlideModalIndustrial =
    currentSlideModalIndustrial.previousElementSibling;
  const prevIndexModalIndustrial = slidesModalIndustrial.findIndex(
    (slide) => slide === prevSlideModalIndustrial
  );

  moveToSlideModalIndustrial(
    trackModalIndustrial,
    currentSlideModalIndustrial,
    prevSlideModalIndustrial
  );
  hideShowArrowsModalIndustrial(
    slidesModalIndustrial,
    prevButtonModalIndustrial,
    nextButtonModalIndustrial,
    prevIndexModalIndustrial
  );
});

const buttonElectrica = document.getElementById('btnModal');
const buttonEstructural = document.getElementById('btnModalEstructural');
const buttonVial = document.getElementById('btnModalVial');
const buttonCloseElectrica = document.getElementById('closeElectrica');
const buttonCloseVial = document.getElementById('closeVial');
const buttonCloseEstructural = document.getElementById('closeEstructural');

buttonElectrica.addEventListener('click', function () {
  MicroModal.show('modal-1');
});

buttonEstructural.addEventListener('click', function () {
  MicroModal.show('modal-2');
});

buttonVial.addEventListener('click', function () {
  MicroModal.show('modal-3');
});

buttonCloseElectrica.addEventListener('click', function () {
  MicroModal.close('modal-1');
});

buttonCloseVial.addEventListener('click', function () {
  MicroModal.close('modal-3');
});
buttonCloseEstructural.addEventListener('click', function () {
  MicroModal.close('modal-2');
});

// FLUJO DE VIAJE EN MODAL INLIBILIARIO

const modalButtonInmobiliario =
  document.querySelector('.modal__botonera').children[0];

modalButtonInmobiliario.addEventListener('click', function () {
  MicroModal.show('modal-4');
  MicroModal.close('modal-2');
});

const closeModalButtonInmobiliario =
  document.getElementById('closeInmobiliario');

closeModalButtonInmobiliario.addEventListener('click', function () {
  MicroModal.close('modal-4');
});

const backModalButtonInmobiliario = document.getElementById(
  'modal__back__inmobiliario'
);

backModalButtonInmobiliario.addEventListener('click', function () {
  MicroModal.close('modal-4');
  MicroModal.show('modal-2');
});

// FLIJO DE VIAJE EN MODAL INDUSTRIAL
const modalButtonIndustrial =
  document.querySelector('.modal__botonera').children[1];

modalButtonIndustrial.addEventListener('click', function () {
  MicroModal.show('modal-5');
  MicroModal.close('modal-2');
});

const closeModalButtonIndustrial = document.getElementById('closeIndustrial');

closeModalButtonIndustrial.addEventListener('click', function () {
  MicroModal.close('modal-5');
});

const backModalButtonIndustrial = document.getElementById(
  'modal__back__industrial'
);

backModalButtonIndustrial.addEventListener('click', function () {
  MicroModal.close('modal-5');
  MicroModal.show('modal-2');
});

/* IE Polyfull */

if (typeof Object.assign != 'function') {
  Object.defineProperty(Object, 'assign', {
    value: function assign(target, varArgs) {
      'use strict';
      if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }
      var to = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];
        if (nextSource != null) {
          for (var nextKey in nextSource) {
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true,
  });
}

if (!Array.from) {
  Array.from = (function () {
    var toStr = Object.prototype.toString;
    var isCallable = function (fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function (value) {
      var number = Number(value);
      if (isNaN(number)) {
        return 0;
      }
      if (number === 0 || !isFinite(number)) {
        return number;
      }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function (value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    return function from(arrayLike) {
      var C = this;
      var items = Object(arrayLike);
      if (arrayLike == null) {
        throw new TypeError(
          'Array.from requires an array-like object - not null or undefined'
        );
      }
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        if (!isCallable(mapFn)) {
          throw new TypeError(
            'Array.from: when provided, the second argument must be a function'
          );
        }
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }
      var len = toLength(items.length);
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);
      var k = 0;
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] =
            typeof T === 'undefined'
              ? mapFn(kValue, k)
              : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      A.length = len;
      return A;
    };
  })();
}

let newDate = new Date();
let month = newDate.getMonth() + 1; //months from 1-12
let day = newDate.getDate();
let year = newDate.getFullYear();
var fecha = `${year}-${month}-${day}`;
var weekday = newDate.getDay();

window.addEventListener('load', function () {
  if ([6].includes(weekday)) {
    console.log('Es Sabado');
    Date.prototype.addDays = function (days) {
      var date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      return date;
    };

    var date = new Date();
    console.log(date);
    const plusSaturday = date.addDays(2);
    console.log(plusSaturday);

    let monthSaturday = plusSaturday.getMonth() + 1; //months from 1-12
    let daySaturday = plusSaturday.getDate();
    let yearSaturday = plusSaturday.getFullYear();
    var fechaSaturday = `${yearSaturday}-${monthSaturday}-${daySaturday}`;
    let daySaturdayNumber = Number(daySaturday);

    console.log(daySaturdayNumber);
    //  SI EL DIA ES MENOR A 10 AGREGA UN 0 ADELANTE
    if (daySaturdayNumber < 10) {
      let dayString = daySaturdayNumber.toString();
      let finalDay = dayString.padStart(2, '0');
      let newDateSaturday = `${yearSaturday}-${monthSaturday}-${finalDay}`;
      console.log(newDateSaturday);
      document.querySelector('#date').setAttribute('value', newDateSaturday);
      document.querySelector('#date').setAttribute('min', newDateSaturday);
    } else {
      console.log(dayString + 'DEBERIA SER 01');
      let dayString = daySaturday.toString();
      const finalDay = dayString.padStart(2, '0');
      let newDateSaturday = `${yearSaturday}-${month}-${finalDay}`;

      document.querySelector('#date').setAttribute('value', newDateSaturday);
      document.querySelector('#date').setAttribute('min', newDateSaturday);
    }
  } else if ([0].includes(weekday)) {
    console.log('Domingo');
    Date.prototype.addDays = function (days) {
      var date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      return date;
    };

    var date = new Date();
    console.log(date);
    const plusSunday = date.addDays(1);
    console.log(plusSunday);

    let monthSunday = plusSunday.getMonth() + 1; //months from 1-12
    let daySunday = plusSunday.getDate();
    let yearSunday = plusSunday.getFullYear();
    var fechaSunday = `${yearSunday}-${monthSunday}-${daySunday}`;
    let daySundayNumber = Number(daySunday);
    //  SI EL DIA ES MENOR A 10 AGREGA UN 0 ADELANTE
    if (daySundayNumber < 10) {
      let dayString = daySundayNumber.toString();
      let finalDay = dayString.padStart(2, '0');
      let newDateSunday = `${yearSunday}-${monthSunday}-${finalDay}`;
      console.log(newDateSunday);
      document.querySelector('#date').setAttribute('value', newDateSunday);
      document.querySelector('#date').setAttribute('min', newDateSunday);
    } else {
      let newDateSunday = `${yearSunday}-${monthSunday}-${daySundayNumber}`;
      document.querySelector('#date').setAttribute('value', newDateSunday);
      document.querySelector('#date').setAttribute('min', newDateSunday);
    }
  } else {
    let dayNumber = Number(day);

    console.log(dayNumber);
    //  SI EL DIA ES MENOR A 10 AGREGA UN 0 ADELANTE
    if (dayNumber < 10) {
      let dayString = dayNumber.toString();
      let finalDay = dayString.padStart(2, '0');
      let newDateWeek = `${year}-${month}-${finalDay}`;
      console.log(finalDay);
      document.querySelector('#date').setAttribute('value', newDateWeek);
      document.querySelector('#date').setAttribute('min', newDateWeek);
    } else {
      let dayString = dayNumber.toString();
      const finalDay = dayString.padStart(2, '0');
      let newDateWeek = `${year}-${month}-${finalDay}`;

      document.querySelector('#date').setAttribute('value', newDateWeek);
      document.querySelector('#date').setAttribute('min', newDateWeek);
    }
  }
});
let dayString = day.toString();
let finalDay = dayString.padStart(2, '0');
let newDateWeek = `${year}-${month}-${finalDay}`;
const picker = document.getElementById('date');
picker.addEventListener('input', function (e) {
  let day = new Date(this.value).getUTCDay();
  if ([6, 0].includes(day)) {
    console.log(newDateWeek);
    e.preventDefault();
    this.value = newDateWeek;

    alert('Weekends not allowed');
  }
});
