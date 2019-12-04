
class nuevoHeader extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML =

`<header>
  <!-- Primera NAV-->
    <nav id="botones" class="navbar navbar-expand-lg navbar-light bg-light">
      <button id="boton1"type="button" class="btn btn-outline-dark m-2" href="faqs.html" >Sign In</button>
      <button id="boton2" type="button" class="btn btn-outline-dark" href="faqs.html">Register</button>
    </nav>

  <!-- Segunda NAV-->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <!-- Mi agregado-->
    <img src="img/we-beer-logo.png" alt="logo shop de cervezas">

    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link active" href="#">Cervezas<span class="sr-only">(current)</span></a>
        <a class="nav-item nav-link" href="#">Promos</a>
        <a class="nav-item nav-link" href="#">Eventos</a>
        <a class="nav-item nav-link" href="#">Nosotros</a>
        <!--<a class="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>-->
      </div>
    </div>
        <ul id="navegar">
          <li><a href="#"><img class="iconos" src="img/header/icon-faqs.png"></a></li>
          <li><a href="#"><img class="iconos" src="img/header/icon-shopping-cart.png"></a></li>
          <li><a href="#"><img class="iconos" src="img/header/icon-beer.png"></a></li>
          <li><a href="#"><img class="iconos" src="img/header/icon-search.png"></a></li>
      </ul>
      <!-- Boton Ani-->

      <button id="botones"type="button" class="btn btn-outline-dark m-2" data-toggle="modal"
       data-target="#exampleModal" data-whatever="@getbootstrap">Contact us</button>

      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Consulta</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </div>
              </button>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">Nombre y Apellido</label>
                  <input type="text" class="form-control" id="recipient-name">
                </div>

                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">Usuario</label>
                  <input type="text" class="form-control" id="recipient-name">
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">E-mail</label>
                  <input type="text" class="form-control" id="recipient-name">
                </div>
                <div class="form-group">
                  <label for="message-text" class="col-form-label">Consulta</label>
                  <textarea class="form-control" id="message-text"></textarea>
                </div>

              </form>
      </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
              <button type="button" class="btn btn-primary">Enviar</button>
            </div>
          </div>
        </div>
      </div>

  </nav>
</header>
`
  }
};
window.customElements.define('nuevo-header', nuevoHeader);
