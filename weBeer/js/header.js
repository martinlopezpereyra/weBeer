
class nuevoHeader extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML =

`<header class=" container">
  <!-- Primera NAV-->

  <div class = "container">

    <nav id="botones" class="navbar navbar-expand-lg navbar-light bg-white p-0">

    <button id="boton1"type="button" class="btn btn-outline-dark m-2" data-toggle="modal" data-target="#exampleModal">Login

    </button>
    <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Login</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <form>


    <div class="form-row">
      <div class="form-group col-md-8">
        <label for="inputEmail4">Email</label>
        <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
      </div>
      </div>
      <div class="form-row">
      <div class="form-group col-md-8">
        <label for="inputPassword4">Password</label>
        <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
      </div>
      </div>
      <div class="form-group">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck">
          <label class="form-check-label" for="gridCheck">
            Acordate de mi cuenta!
          </label>
        </div>
      </div>

    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-light"><a href="registro.html">Registrarme</a></button>
      <button type="button" class="btn btn-dark">Ingresar</button>
    </div>
  </div>
</div>
</div>
<!fin modal------>

      <!-- <button id="boton1"type="button" class="btn btn-outline-dark m-2" href="faqs.html" >Sign In</button>-->

      <button type="button" class="btn btn-outline-dark"><a href="registro.html">Sign Up</a></button>

      <!--<button id="boton2" type="button" class="btn btn-outline-dark" href="faqs.html">Register</button>-->

      <!-- Boton Ani-->

      <!--<button id="botones"type="button" class="btn btn-outline-dark m-2" data-toggle="modal"
       data-target="#exampleModal" data-whatever="@getbootstrap">Contact us</button>-->

       <!--<button type="button" class="btn btn-dark">Contact</button>-->

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

    </div>

  <!-- Segunda NAV-->

  <div class = "navDos">
  <nav class="navbar navbar-expand-lg navbar-light bg-white p-0">
    <!-- Mi agregado-->
    <img class="logo" src="img/we-beer-logo.png" alt="logo shop de cervezas">
    <!---------------->
    <!--<a class="navbar-brand" href="#">cervezas</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>-->

    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link" href="index.html">Cervezas</a>
        <a class="nav-item nav-link" href="#">Promos</a>
        <a class="nav-item nav-link" href="#">Eventos</a>
        <a class="nav-item nav-link" href="#">Nosotros</a>
        <a class="nav-item nav-link" href="#">Contacto</a>
        <!--
        <a class="nav-item nav-link active" href="#">Cervezas<span class="sr-only">(current)</span></a>
        <a class="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>-->
      </div>
    </div>
        <ul id="navegar">
          <li><a href="faqs.html"><img class="iconos" src="img/header/icon-faqs.png"></a></li>
          <!--<li><a href="#"><img class="iconos" src="img/header/icon-shopping-cart.png"></a></li>-->
          <li><a href="shop.html"><img class="iconos" src="img/header/icon-beer.png"></a></li>
          <li><a href="#"><img class="iconos" src="img/header/icon-search.png"></a></li>
      </ul>
  </nav>
</div>
</header>
`
  }
};
window.customElements.define('nuevo-header', nuevoHeader);
