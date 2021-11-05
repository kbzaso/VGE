// import planos from '@images/planos.jpg';

const Contacto = () => {
  // let today = new Date().toISOString().substr(0, 10);
  // document.querySelector("#today").value = today;

  const view = `
  <div class="contacto container flex-jc-c">
    <div class="contacto__info">
      <h2>Contacto</h2>
      <h3>Queremos trabajar contigo</h3>
      <p>Ingresa tus datos en los recuadros correspondientes y cuéntanos cuál segmento horario te es óptimo para agendar una reunión. Nos pondremos en contacto contigo cuanto antes vía mail para concretar el encuentro online y conocer tu proyecto.</p>
    </div>
    <div class="contacto__form">
      <form action="https://formsubmit.co/vgespa.ingenieria@gmail.com" method="POST">
      <div class='name'>
          <label for="name">Nombre</label>
          <input id='name' class='effect-11' name='name' type="text" required>
          <span class="focus-bg"></span>
        </div>

        <div class='email'>
        <label for="email">Email</label>
        <input id='email' name='email' type="text" required>
        </div>

        <div class="elegirFecha">
          <div class="date">
            <label for="date">Fecha</label>
            <input id='date' name='date' min='' asp-format="{0:yyyy-MM-dd}" type="date" required>
          </div>
          
          <div class="checkbox">
            <legend>Horario de preferencia</legend>
            <label class='check-container' for="am">
              <input id='am' name='am' type="checkbox">
              <span class="checkmark"></span>
              AM
            </label>
            
            <label class='check-container' for="pm">
            <input id='pm' name='pm' type="checkbox">
            <span class="checkmark"></span>
            PM
            </label>
          </div>
        </div>

        <div class="message">
        <label for="message">Mensaje</label>
        <textarea rows="6" id='message' placeholder='Hola VGE, tengo un proyecto en mente...' name='message' required></textarea>
        </div>
        <input type="hidden" name="_subject" value="Nuevo correo enviado desde vge.cl">
        <input class='form__button' type="submit" value='Enviar'>
        
      </form>
    </div>
  </div>
  `;
  return view;
};

export default Contacto;
