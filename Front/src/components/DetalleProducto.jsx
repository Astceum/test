const images = require.context('../Imgcatalogo', true);
import '../css/catalogo.css'
import Detalle from './Detalle';

function DetalleProducto() {
    return (
        <div id="view-details" className="container-fluid">
            <div className='category-fluid'>
                <div className='nested-cards'>
                <Detalle />
                </div>
                <div className="nested-menu">
                    <div className="menu">
                        <div className="buscador">
                            <form>
                                <input className="form me-2" type="text-cat" name="busqueda" placeholder="Buscar..." />
                                <button type="submit">Buscar</button>
                            </form>
                        </div>

                        <div className="menu-container">
                            <h2 className="categorias">CATEGORÍAS DE PRODUCTOS</h2>
                            <button className="seccion">Todos los productos</button><br />
                            <button className="seccion">Accesorios</button><br />
                            <button className="seccion">Cotillón</button><br />
                            <button className="seccion">Decoración</button><br />
                            <button className="seccion">Papelería</button><br />
                            <button className="seccion">Recipientes</button><br />
                            <button className="seccion">Vestimenta</button><br />
                        </div>

                        <div className="pagination">
                            <a href="/" className="active">1</a>
                            <a href="/">2</a>
                            <a href="/">3</a>
                            <a href="/">4</a>
                            <a href="/">5</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default DetalleProducto;