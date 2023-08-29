import bannercat from "../Imgcatalogo/catalogo.png";
import "../css/banhe.css";

function Bannercat() {
    return (
        <div className="container-fluid">
        <div className='banner'>
            <img src={bannercat} alt="" />
        </div>
        </div>
    )
}

export default Bannercat;