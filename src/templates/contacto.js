// import planos from '@images/planos.jpg';

const Contacto = () => {
    const view = `
  <div class="contacto container flex-jc-c">
    <div class="contacto__info">
      <h2>Contacto</h2>
      <h3>Queremos trabajar contigo</h3>
      <p>Ingresa tus datos en los recuadros correspondientes y cuéntanos cuál segmento horario te es óptimo para agendar una reunión. Nos pondremos en contacto contigo cuanto antes vía mail para concretar el encuentro online y conocer tu proyecto.</p>
    </div>
    <div class="contacto__form">
      <form action="">
      <div class='name'>
          <label for="name">Nombre</label>
          <input id='name' class='effect-11' name='name' type="text">
          <span class="focus-bg"></span>
        </div>

        <div class='email'>
        <label for="email">Email</label>
        <input id='email' name='email' type="text">
        </div>

        <div class="elegirFecha">
          <div class="date">
            <label for="date">Fecha</label>
            <input id='date' name='date' type="date">
          </div>
          
          <div class="checkbox">
            <legend>Horario de preferencia</legend>
            <label for="pm">
              <input id='pm' name='pm' type="checkbox">
              AM
            </label>
            
            <input id='pm' name='pm' type="checkbox">
            <label for="pm">PM</label>
          </div>
        </div>

        <div class="message">
        <label for="message">Mensaje</label>
        <textarea rows="6" id='message' placeholder='Hola VGE, tengo un proyecto en mente...' name='message'> </textarea>
        </div>
        <input class='form__button' type="button" value='Enviar'>
        
      </form>
    </div>
  </div>
  `;
    return view;
};

export default Contacto;