import Header from "../components/Header";
import Detalle from "../components/Detalle";
import Footer from "../components/Footer";
import Bannercat from "../components/Bannercat";

const DetallePage = () =>{
    return (
        <div className="bg-white">
            <Header />
            <Bannercat />
            <Detalle />
            <Footer />
        </div>
    );
}

export default DetallePage;