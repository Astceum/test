
import parati from "../img/para_ti.png"
import institu from "../img/instituciones.png"
import empresa from "../img/empresas.png"
import "../css/inicio.css";

import { PostInicio } from "./PostInicio";



function Inicio() {
 
  return (

    <div id="bodys">
          
        
<PostInicio/>
        

          
      
      <br /><br />
      <div id="services">
        <div className="container">
          <h2 className="titulos">Buscas servicio</h2>
          <div className="row">
            <div className="col-lg-4 mt-4">
              <div className="card servicesCard">
                <div className="card-body text-center">
                  <i className="fa-solid fa-user iconStyle" style={{ color: "#6bbbb5" }}></i>
                  <h4 className="card-title titulotarjeta">Para ti</h4>
                  <p className="ptarjeta">Encuentra el producto que más te gusta y personalízalo con lo que tu quieras (poleras, polerones y más)</p>
                  <a href="/catalogo">
                  <button type="button"  className="btn btn-n">Más info</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-4">
              <div className="card servicesCard">
                <div className="card-body text-center">
                  <i className="fa-solid fa-school iconStyle" style={{ color: "#6bbbb5" }}></i>
                  <h4 className="card-title titulotarjeta">Colegios</h4>
                  <p className="ptarjeta">Realizamos agendas de comunicaciones personalizadas, contamos con regalos corporativos </p>
                  <a href="/empresa">
                  <button type="button" href="/Inicio/Empresa/index.html" className="btn btn-n">Más info</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-4">
              <div className="card servicesCard">
                <div className="card-body text-center">
                  <i className="fa-solid fa-building iconStyle" style={{ color: "#6bbbb5" }}></i>
                  <h4 className="card-title titulotarjeta">Empresas</h4>
                  <p className="ptarjeta">Branding y regalos corporativos para empresas (lapices, llaveros, botellas y mucho más)</p>
                  <a href="/empresa">
                  <button type="button" href="/Inicio/Empresa/index.html" className="btn btn-n">Más info</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <br /><br />
      <div id="imagenesJuntas">
          <div className="card-group">
            <div className="card">
              <img src={parati} className="card-img-top" alt="..." />
            </div>
            <div className="card">
              <img src={institu} className="card-img-top" alt="..." />
            </div>
            <div className="card">
              <img src={empresa} className="card-img-top" alt="..." />

            </div>
          </div>
        </div>






    </div>




  );
}

export default Inicio;
