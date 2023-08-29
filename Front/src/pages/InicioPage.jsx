import Inicio from "../components/Inicio";
import Header from "../components/Header";
import Comentarios from "../components/Comentarios";
import Carrusel from "../components/Carrusel";
import Footer from "../components/Footer";


export function InicioPage() {
  return (
    <div className="bg-white">
       <Header />
    <Inicio />
    <Carrusel />
    <Comentarios />
    <Footer />
    </div>
  )
}
export default InicioPage;
