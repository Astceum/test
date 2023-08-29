import ubicacionn from "../imgcont/ubicacion-01.png"
import ig from "../imgcont/ig-02.png"
import wsp from "../imgcont/wasap-03.png"
import trans from "../imgcont/logos-transbank-2.png"
import logi from "../imgcont/LOGO2.png"
import "../css/footer.css"


function Footer() {
  return (
    
    <div className="footer">
      <div className="container">
        <div className="row">
        <div className="col-md-3 redes">
          
            <a className="link-maps" href="https://www.google.cl/maps/place/Av.+Brasil+7948,+8661078+Renca,+Regi%C3%B3n+Metropolitana/@-33.3980382,-70.7534189,17z/data=!3m1!4b1!4m6!3m5!1s0x9662c16d39b5066d:0xc983b693fca7d344!8m2!3d-33.3980427!4d-70.750844!16s%2Fg%2F11cs9cz7jl?entry=ttu" target="_blank">
              <h5 className="font-bold">Ubicación</h5>
              <img src={ubicacionn} className="ubicacion" alt="" />
              <p className="font-medium">Av. Brasil 7948, Renca</p>
            </a><br />
          
        </div>
        <div className="col-md-3 i-w">
          <a className="link-insta" href="https://www.instagram.com/magy_print_imprimetuidea/" target="_blank">
            <h5 className="font-bold">Síguenos</h5>
            <img src={ig} className="ig" />
            <p className="font-medium">magy_print_imprimetuidea</p>
          </a>
          <br />
          <a className="link-ws" href="https://api.whatsapp.com/send/?phone=%2B56962610425&text=Hola%2C+necesito+informaci%C3%B3n+de+sus+productos" target="_blank">
            <h5 className="font-bold">Contáctanos</h5>
            <img src={wsp} className="wasap" />
            <p className="font-medium">+569 62610425</p>
          </a>
        </div>

        <div className="col-md-3 pago">
          <div className="pagos">
          <h5 className="font-bold">Medios de pago</h5>
          <img src={trans} className="mediosdepago" alt="" />
        </div>
        </div>
        <div className="col-md-3 navegador font-medium">
          
            <a className="link-f" href="/">Inicio</a>
            <a className="link-f" href="/catalogo">Catalogo</a>
            <a className="link-f" href="/empresa">Empresa</a>
            <a className="link-f" href="/nosotros">Nosotros</a>
            <a className="link-f" href="/contacto">Contacto</a>
            <img src={logi} className="logofooter" />
          
          
        </div>
        </div>
      </div>
    </div >
  )
}

export default Footer;
