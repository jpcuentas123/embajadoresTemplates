import './App.css';


//Assets

import user_logo from './assets/user_logo.png'
import banner from './assets/banner.jpg'

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
      <section className="PostContainer">
        <article className="Post">
          <a>
            <header className="Post-header">
              <img src={banner} alt="Imagen no dispoible" />
            </header>
            <section className="Post-body">
              <div className="Post-body-item Post-body-item--title">
                <h3>Empresa</h3> <span className="Post-body-item-status Post-btn">En revisión</span>
              </div>
              <div className="Post-body-item Post-body-item--controls">
                <p className="Post-btn Post-btn-edit">Editar</p>
                <p className="Post-btn Post-btn-delete">Borrar</p>
              </div>
              <div className="Post-body-item">
                <small>Tipo</small>
                <p>Emprendimiento</p>
              </div>
              <div className="Post-body-item">
                <small>País</small>
                <p>Colombia</p>
              </div>
              <div className="Post-body-item Post-body-item--description">
                <small>Descripción</small>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non ex nibh. Suspendisse lacinia, urna sed congue suscipit, magna orci volutpat felis, non fringilla ligula nibh gravida enim.</p>
              </div>

            </section>
            <footer className="Post-footer">
              <div >
                <img src={user_logo} alt="Imagen no dispoible" />
              </div>
              <div className="Post-footer-info">
                <p className="Post-footer-info-user">Jorge</p>
                <p className="Post-footer-info-date">29 de marzo de 2021</p>
              </div>
            </footer>
          </a>
        </article>
        <article className="Post">
          <a>
            <header className="Post-header">
              <img src={banner} alt="Imagen no dispoible" />
            </header>
            <section className="Post-body">
              <div className="Post-body-item">
                <h3>Empresa</h3>
              </div>
              <div className="Post-body-item">
                <small>País</small>
                <p>Colombia</p>
              </div>
              <div className="Post-body-item Post-body-item--description">
                <small>Descripción</small>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non ex nibh. Suspendisse lacinia, urna sed congue suscipit, magna orci volutpat felis, non fringilla ligula nibh gravida enim.</p>
              </div>

            </section>
            <footer className="Post-footer">
              <div >
                <img src={user_logo} alt="Imagen no dispoible" />
              </div>
              <div className="Post-footer-info">
                <p className="Post-footer-info-user">Jorge</p>
                <p className="Post-footer-info-date">29 de marzo de 2021</p>
              </div>
            </footer>
          </a>
        </article>
      </section>
      <div className="dashboard-menu">

        <div className="dashboard-menu-item">
          <button>
            <a href="/emnuy//mi-perfil">
              Mi perfil
                </a>
          </button>
        </div>
        <div className="dashboard-menu-item dashboard-menu-item--post">
          <button className="">
            <a href="/emnuy/publicar/">
              Publicar
            </a>
          </button>
          <div className="dashboard-menu-item dashboard-menu-subitem">
            <button className="">
              <a href="/emnuy/publicar/">
                Oferta laboral
            </a>
            </button>
            <button className="">
              <a href="/emnuy/publicar/">
                Emprendimiento
            </a>
            </button>
          </div>
        </div>
        <div className="dashboard-menu-item">
          <button className="active">
            Publicaciones
            </button>
        </div>
        <div className="dashboard-menu-item">
          <button>Cerrar sesión</button>
        </div>

      </div>
      <form class="EntrepreneurshipForm" action="http://localhost/emnuy/publicando-emprendimiento/" method="POST" enctype="multipart/form-data">
      <header>
        <h3>Publicar oferta laboral</h3>
      </header>
      <section class="EntrepreneurshipForm-section">

        <div>
          <label for="">Nombre de la oferta</label>
          <input value="" placeholder="" required id="offer_name" name="offer_name"
            autocomplete="given-name" />
        </div>

        <div>
          <label for="">Correo electrónico</label>
          <input value="" placeholder="" required id="offer_email" name="offer_email"
            autocomplete="email" />
        </div>

      </section>

      <section class="EntrepreneurshipForm-section">

        <div>
          <label for="">Teléfono de contacto</label>
          <input value="" placeholder="" required id="offer_tel" name="offer_tel" autocomplete="tel" />
        </div>

        <div>
          <label for="">País</label>
          <input value="" placeholder="" required id="offer_country" name="offer_country"
            autocomplete="country" />
        </div>

      </section>

      <section class="EntrepreneurshipForm-section">

        <div>
          <label for="">Cargo requerido</label>
          <input value="" placeholder="" required id="offer_job" name="offer_job"
            autocomplete="job" />
        </div>
        <div>
          <label for="">Descripción</label>
          <textarea id="offer_info" name="offer_info">
          </textarea>
        </div>

      </section>

      <section class="EntrepreneurshipForm-section lastsection">

        <div>
          <label for="">¿Quieres adjuntar tu logo?</label>
          <input value="" type="file" placeholder="" id="offer_logo" name="offer_logo" />
        </div>
        <div class="">
          <label for="">¿Autorizas que compartamos tu información en esta red para que los miembros de la comunidad
          conozcan sobre tu emprendimiento?
                <input type="checkbox" placeholder="Si" required id="offer" name="offer" />
          </label>
        </div>

      </section>
      <section class="EntrepreneurshipForm-section controls">
        <button>Publicar</button>
      </section>
    </form>
    </>
  );
}

export default App;
