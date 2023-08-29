import pausan from "../imglogo/deliciaspausan.png";
import dulce from "../imglogo/dulcemomento.png";
import encanto from "../imglogo/ecantos.png";
import sabores from "../imglogo/misabores.png";
import marley from "../imglogo/mueblesMarley.png";
import cony from "../imglogo/cony.png";
import nahuel from "../imglogo/nahuel2.png";
import nicol from "../imglogo/nicolcake.png";
import abuela from "../imglogo/recetaabuela.png";
import "../css/comentarioslide.css";

function Comentarios() {
  return (
    <div id="comentario" className="container-fluid">
      <h2 className="titulos">Confían en nosotros</h2>
      <div id="carouselExampleIndicators3" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="0" className="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-md-4" >
                <div className="single-box">
                  <div className="img-area">
                    <img src={pausan} alt="" className="imagen-central"/>
                    <h2 className="titulotarjeta">Delicias Pausan</h2>
                    <p>"Fui a buscar su trabajo se pasó Le quedaron hermosos los colores me encantan están full"</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4"  >
                <div className="single-box">
                  <div className="img-area">
                    <img src={dulce} alt="" className="imagen-central"/>
                  
                    <h2 className="titulotarjeta">Dulce Momento</h2>
                    <p className="ptarjeta">"Muy buena responsable y bello trabajo y buena calidad me han encantado mis stickers"</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4" >
                <div className="single-box">
                  <div className="img-area">
                    <img src={encanto} alt="" className="imagen-central"/>
                  
                    <h2 className="titulotarjeta">Encantos L&C</h2>
                    <p className="ptarjeta">"Excelente atención, muy puntual, muy profesional con su trabajo la recomiendo 100%"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-4" >
                <div className="single-box">
                  <div className="img-area">
                    <img src={sabores} alt="" className="imagen-central"/>
                  
                    <h2 className="titulotarjeta">Mis Sabores 7</h2>
                    <p className="ptarjeta">"Simplemente muy responsable y excelente servicio 100% recomendable"</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4" >
                <div className="single-box">
                  <div className="img-area">
                    <img src={marley} alt="" className="imagen-central"/>
                  
                    <h2 className="titulotarjeta">Muebles Marley</h2>
                    <p className="ptarjeta">"Muy buena experiencia puntualidad y seriedad en sus trabajos"</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4" >
                <div className="single-box">
                  <div className="img-area">
                    <img src={cony} alt="" className="imagen-central"/>
                  
                    <h2 className="titulotarjeta">Conny Belleza</h2>
                    <p className="ptarjeta">"Muy buena atención y puntualidad"<br /></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-4" >
                <div className="single-box">
                  <div className="img-area">
                    <img src={nahuel} alt="" className="imagen-central"/>
                  
                    <h2 className="titulotarjeta">Nahuel</h2>
                    <p className="ptarjeta">"Excelente servicio rápida entrega de cotización y cumple con los días de entrega el resultado es bello"</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4" >
                <div className="single-box">
                  <div className="img-area">
                    <img src={nicol} alt="" className="imagen-central"/>
                  
                    <h2 className="titulotarjeta">Nicole Cakes</h2>
                    <p className="ptarjeta">"Recomendado 100% excelente trabajo y calidad y está además decir la simpatía con la que se comunicar"</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 imgslides">
                <div className="single-box">
                  <div className="img-area">
                    <img src={abuela} alt="" className="imagen-central"/>
                  
                    <h2 className="titulotarjeta">Delicias Mami Patty</h2>
                    <p className="ptarjeta">"Gracias chiquilla de ojitos lindos me encanta tu trabajo y lo responsable que eres por eso no te cambio por nada por tu profesionalismo"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators3"
          data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators3"
          data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        <br />
        <br />
      </div>
    </div>

  );
}

export default Comentarios;  