import familia from "../imgnos/Foto familiar.jpeg"
import "../css/nosotros.css";
function Nosotros() {
  return (

    <div className="container padre" id="nosotros">
      <div className="row">
        <div className="col-md-4">
          <img src={familia} alt="Imagen" className="imagen" />
        </div>
        <div className="col-md-8 columna">
          <h2 className="titulo">Una empresa basada en la familia</h2>
          <p className="descripcion">La historia de Margarita, conocida cariñosamente como Maggy es la de una madre, cuya vida cambió cuando su hijo fue diagnosticado con Autismo. Con el deseo de dedicar más tiempo a su hijo y generar ingresos, crea su negocio llamado "Magyprint", una tienda de productos personalizados y originales, permitiendo a los clientes enviar sus propios diseños. Con el apoyo de su esposo y clientes satisfechos, el negocio crece. Magyprint se convirtió en una prueba del poder del amor la constancia y la creatividad para superar los obstáculos, inspirando a otros la originalidad en cada regalo.</p>
        </div>
      </div>
    </div>



  );
}

export default Nosotros;
