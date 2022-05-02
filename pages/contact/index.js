import styles from 'styles/Home.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <div className="contact_form">
        <div className="formulario">
          <h1>Formulario de contacto</h1>
          <h3>Escríbenos y en breve nos pondremos en contacto contigo</h3>

          <form>
            <p>
              <label>
                Nombre
                <span>*</span>
                <input
                  type="text"
                  name="name"
                  id="nombre"
                  required="obligatorio"
                  placeholder="Escribe tu nombre"
                />
              </label>
            </p>

            <p>
              <label>
                Email
                <span>*</span>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required="obligatorio"
                  placeholder="Escribe tu Email"
                />
              </label>
            </p>

            <p>
              <label>
                Teléfono
                <input
                  type="tel"
                  name="telefono"
                  id="telefono"
                  placeholder="Escribe tu teléfono"
                />
              </label>
            </p>

            <p>
              <label>
                Asunto
                <span>*</span>
                <input
                  type="text"
                  name="asunto"
                  id="assunto"
                  required="obligatorio"
                  placeholder="Escribe un asunto"
                />
              </label>
            </p>

            <p>
              <label>
                Mensaje
                <span>*</span>
                <textarea
                  name="mensaje"
                  id="mensaje"
                  required="obligatorio"
                  placeholder="Deja aquí tu comentario..."
                ></textarea>
              </label>
            </p>

            <button type="submit" name="enviar" id="enviar">
              <p>Enviar</p>
            </button>

            <p>
              <span> * </span>los campos son obligatorios.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
