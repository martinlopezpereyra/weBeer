<<<<<<< HEAD
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
  </nav>
</header>
`
  }
};
window.customElements.define('nuevo-header', nuevoHeader);
=======
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
  </nav>
</header>
`
  }
};
window.customElements.define('nuevo-header', nuevoHeader);
>>>>>>> d1cead8280082c6a8d1383b4e9097e53b7251c8a
