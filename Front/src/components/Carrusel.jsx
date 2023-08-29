import tazon from "../img/tazon.png";
import bolsa from "../img/bolsas.png";
import botella from "../img/botellas.png";
import "../css/inicio.css";
function Carrusel() {
    return (
        <div id="catego">
            <br /><br />
        <div className="container">
          <h2 className="titulos">Categorías</h2>
          <div id="carouselExampleIndicators2" className="carousel slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="cards-wrapper">
                  <div className="card">
                    <img src={tazon} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h4 className="card-title titulotarjeta">Accesorios</h4>
                    </div>
                  </div>
                  <div className="card d-none d-md-block">
                    <img src={botella} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h4 className="card-title titulotarjeta">Cotillón</h4>
                    </div>
                  </div>
                  <div className="card d-none d-md-block">
                    <img src={bolsa} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h4 className="card-title titulotarjeta">Decoración</h4>

                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="cards-wrapper">
                  <div className="card">
                    <img src={botella} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h4 className="card-title titulotarjeta">Papelería</h4>
                    </div>
                  </div>
                  <div className="card d-none d-md-block">
                    <img src={bolsa} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h4 className="card-title titulotarjeta">Recipientes</h4>
                    </div>
                  </div>
                  <div className="card d-none d-md-block">
                    <img src={tazon} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h4 className="card-title titulotarjeta">Vestimenta</h4>

                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="cards-wrapper">
                  <div className="card">
                    <img src={tazon} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h4 className="card-title titulotarjeta">Para ti</h4>
                    </div>
                  </div>
                  <div className="card d-none d-md-block">
                    <img src={bolsa} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h4 className="card-title titulotarjeta">Para ti</h4>
                    </div>
                  </div>
                  <div className="card d-none d-md-block">
                    <img src={tazon} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h4 className="card-title titulotarjeta">Para ti</h4>

                    </div>
                  </div>
                </div>
              </div>

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <br /><br />
        
      </div>
  





        );
    }
    
    export default Carrusel;  