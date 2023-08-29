import Header from "../components/Header";
import Catalogo from "../components/Catalogo";
import Footer from "../components/Footer";
import Bannercat from "../components/Bannercat";

const CatalogoPage = () =>{
    return (
        <div className="bg-white">
            <Header />
            <Bannercat />
            <Catalogo />
            <Footer />
        </div>
    );
}

export default CatalogoPage;