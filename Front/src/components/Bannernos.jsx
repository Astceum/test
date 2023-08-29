import bannernos from "../Imgbanner/bannnos.png";
import "../css/banhe.css";

function Bannernos() {
    return (
        <div className="container-fluid">
        <div className='banner'>
            <img src={bannernos} alt="" />
        </div>
        </div>
    )
}

export default Bannernos;