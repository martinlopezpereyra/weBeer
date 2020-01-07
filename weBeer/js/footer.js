
class nuevoFooter extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML =

`
<footer class="webintern-footer">

<a name="promosBancarias" id="bancos">
<img src="img/785X40.jpg" class="promosBancarias" alt="promos bancarias"></a>
<div class="webintern-footer-inner">
<div class="container">
<div class="row">

<div class="col-sm-6 col-md-3 ">
<img class="logoFooter" src="img/we-beer-logo-footer.png" alt="logo shop de cervezas">
<div class="simple-text dark padding-sm">
<p>Somos una tienda especializada en la venta online de cervezas artesanales producidas en Argentina. Nuestro fin es brindarles
  un catálogo con la mejor cerveza artesanal de todos los rincones de nuestro pais.</p>
</div>
<div class="empty-space xs-25 sm-25"></div>
</div>

<!-- webintern_footer_title -->
<div class="col-sm-6 col-md-2 footer-2">
<h4 class="webintern_footer_title h5"><small>SHOP</small></h4>
<ul class="webintern-footer-list">
<li><a href="#">Cervezas</a></li>
<li><a href="#">Promos</a></li>
<li><a href="#">Eventos</a></li>
<li><a href="#">Oportunidad!</a></li>
<li><a href="#">Suma tu producto</a></li>
<li><a href="#">Registrate</a></li>
</ul>
<div class="empty-space xs-25 sm-25"></div>
</div>
<div class="col-sm-6 col-md-3 footer-3">
<!-- webintern_footer_title -->
<h4 class="webintern_footer_title h5"><small>CONTACTO </small></h4>
<ul class="webintern-footer-list">
<li><a href="#">Minorista +54 9 261 5251540</a></li>
<li><a href="#">Mayorista +54 9 261 5251544</a></li>
<li><a href="mailto:estefania.idk@gmail.com">ventas@weebeershop.com</a></li>
<li><a href="mailto:estefania.idk@gmail.com">info@weebeershop.com</a></li>
<li><a href="https://goo.gl/maps/2rgVdoTgkY6JTNxWA">Rodriguez Peña 200</a></li>
<li><a href="https://goo.gl/maps/fEN2ZQUnvKwD1ZU46">Mendoza.Argentina</a></li>
</ul>
<div class="empty-space xs-25"></div>
</div>
<div class="col-xs-12 col-md-4 col-sm-6">
<div class="marg-sm-b30"></div>
<!-- webintern_footer_title -->
<h4 class="webintern_footer_title h5"><small>Subscribite a nuestro Newsletter!!!</small></h4>
<div class="empty-space marg-lg-b20"></div>
<!--
<div class="simple-text last dark ">
<p>Get latest updates and offers.</p>
</div>
-->
<div class="empty-space marg-lg-b15"></div>
<!-- TT-SUBSCRIBE -->
<form method="post">
  <div class="tt-subscribe">
    <input type="text" required="" placeholder="Ingresá tu email">
  <div class="tt-subscribe-submit">
      <i class="fa fa-envelope" aria-hidden="true"></i>
    <input type="submit" value="">
  </div>
  </div>
</form>
  <div class="empty-space marg-lg-b30"></div>
<!-- TT-SOCAIL -->
<ul class="tt-socail">
<li><a href="https://www.facebook.com/"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
<li><a href="https://www.instagram.com/"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
<li><a href="https://twitter.com"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>


<li><a href="https://www.youtube.com/"><i class="fa fa-youtube" aria-hidden="true"></i></a></li>
</ul>
</div>
</div>
</div>
</div>
</footer>
`
  }
};
window.customElements.define('nuevo-Footer', nuevoFooter);
