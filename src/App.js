import './App.css';

const App = () => {
  return (

    <>
      <form className="EntrepreneurshipForm" action="" method="POST">
        <header>
          <h3>Publicar emprendimiento</h3>
        </header>
        <section className="EntrepreneurshipForm-section">

          <div>
            <label for="">Nombre del emprendimiento</label>
            <input value="" placeholder="" required id="entrepreneurship_name" name="entrepreneurship_name"
              autocomplete="given-name" />
          </div>

          <div>
            <label for="">Correo electrónico</label>
            <input value="" placeholder="" required id="entrepreneurship_email" name="entrepreneurship_email"
              autocomplete="email" />
          </div>

        </section>

        <section className="EntrepreneurshipForm-section">

          <div>
            <label for="">Teléfono de contacto</label>
            <input value="" placeholder="" required id="entrepreneurship_tel" name="entrepreneurship_tel" autocomplete="tel" />
          </div>

          <div>
            <label for="">País</label>
            <input value="" placeholder="" required id="entrepreneurship_country" name="entrepreneurship_country"
              autocomplete="country" />
          </div>

        </section>

        <section className="EntrepreneurshipForm-section">

          <div>
            <label for="">¿Quieres adjuntar tu logo?</label>
            <input value="" type="file" placeholder="" id="entrepreneurship_logo" name="entrepreneurship_logo" />
          </div>
          <div>
            <label for="">Cuentanos más sobre tu emprendimiento</label>
            <textarea id="entrepreneurship_info" name="entrepreneurship_info">
            </textarea>
          </div>

        </section>

        <section className="EntrepreneurshipForm-section lastsection">

          <div>
            <label for="">¿Tienes página web para que toda nuestra comunidad te pueda visitar?</label>
            <input value="" type="url" placeholder="" id="entrepreneurship_website" name="entrepreneurship_website"
              autocomplete="url" />
          </div>
          <div className="">
            <label for="">¿Autorizas que compartamos tu información en esta red para que los miembros de la comunidad
            conozcan sobre tu emprendimiento?
                <input type="checkbox" placeholder="Si" required id="entrepreneurship" name="entrepreneurship" />
            </label>
          </div>

        </section>
        <section className="EntrepreneurshipForm-section controls">
          <button>Publicar</button>
        </section>

      </form>

      <div className="EntrepreneurshipPost">
        <aside className="EntrepreneurshipPost-aside">
          <header>
            <h4>Jorge Pérez Cuentas</h4>
          </header>
          <article>
            <h5>País</h5>
            <p>Colombia</p>
            <h5>Teléfono</h5>
            <p>3024112312</p>
            <h5>Email</h5>
            <p>jpcuentas123@gmail.com</p>
          </article>
        </aside>
        <article className="EntrepreneurshipPost-content">
          <header className="EntrepreneurshipPost-content-header">
            <h2>Empleo de ingeniero</h2>
          </header>
          <article>
            <h5>
              Cargo
            </h5>
            <p>
              Ingeniero de software
            </p>
            <h5>
              Descripción
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a purus a ipsum vehicula dictum.
              Duis eu gravida leo. Phasellus a varius dui. Ut sit amet egestas nunc, quis imper
              diet velit. Duis neque magna, sodales a mauris eu, auctor accumsan risus. Maecenas sagittis port
              a velit at vestibulum. Sed rutrum pharetra congue. Etiam consequat rhoncus urna
              sed facilisis. Duis commodo massa odio, mollis molestie ex mattis eget. Nullam in leo risus.
              Mauris sollicitudin nec massa sit amet ullamcorper. Curabitur ac urna tristique, temp
              or metus tincidunt, consequat nunc. Curabitur convallis ultrices est, vehicula commodo n
              eque cursus at. Vivamus ut lacus quis dolor mollis porta.
            </p>
            <h5>
              Requerimientos adicionales
            </h5>
            <p>
              Ingle, Liderazgo, Trabajo en equipo
            </p>
          </article>
        </article>

      </div>
    </>
  );
}

export default App;
