import tazon from "../imagenes/tazon1.jpeg";
import tazon2 from "../imagenes/tazon11.jpeg";
import tazon3 from "../imagenes/tazon111.jpeg";
import "../css/detalle.css";
import PostDetalleImg from './PostDetalle'

import { usePosts } from "../context/PostContext";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";




/* function mostrarImagenOnClick(event, imagenURL) {
    event.preventDefault();
    var imagenProducto = document.getElementById('producto-imagen');
    imagenProducto.src = imagenURL;
  } */

function Detalle() {
    const {posts} = usePosts();
    



    const { id } = useParams();

    const [detalle, setDetalle] = useState();

   
   useEffect(() => {
    setDetalle(listaPosts.find(post => post._id === id));
   }, [listaPosts, id]);


    
    return (

        <div id="detalle" className="container">
    <div className="row">
        <div className="col-lg-4 custom-column">
            <h2 className="producto-titulo">Producto</h2><br />

          {/* {detalle._id? detalle.title : null} */}




            
           {/* {posts.map((post) => (
                            <PostDetalleImg post={post} key={post._id} />
                            ))}
             */}
         

            {/* <img src={tazon} className="producto" id="producto-imagen" alt="Producto" /> */}
            {/* <div className="img-ad">
                <a href="#">
                    <img
                        src={tazon}
                        alt=""
                        data-image={tazon}
                        onClick={(event) => mostrarImagenOnClick(event, tazon)}
                    />
                </a>
                <a href="#">
                    <img
                        src={tazon2}
                        alt=""
                        data-image={tazon2}
                        onClick={(event) => mostrarImagenOnClick(event, tazon2)}
                    />
                </a>
                <a href="#">
                    <img
                        src={tazon3}
                        alt=""
                        data-image={tazon3}
                        onClick={(event) => mostrarImagenOnClick(event, tazon3)}
                    />
                </a>
            </div> */}
        </div>

        <div className="col-lg-4 custom-column2">
            <h4 className="nombre">Producto</h4><br />
            <p className="desc-producto">Contenido de la columna más grande. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Dolorem labore illo, culpa nam repudiandae ducimus debitis iste in dolorum optio
                similique corporis at sequi voluptatibus ipsa dignissimos necessitatibus, autem fugit.</p>
            <p className="colores">Colores disponibles</p>
        </div>

        <div className="col-lg-4 custom-column3 py-5">
            <div className="buscador">
                <form>
                    <input type="text" name="busqueda" placeholder="Buscar..." className="form-control" />
                    <button type="submit" className="btn btn-primary">Buscar</button>
                </form>
            </div>
            <div className="menu-container">
                <h2 className="categorias">CATEGORÍAS DE PRODUCTOS</h2>
                <button className="btn btn-secondary seccion">Anime</button><br />
                <button className="btn btn-secondary seccion">Niños</button><br />
                <button className="btn btn-secondary seccion">Vasos</button><br />
                <button className="btn btn-secondary seccion">Poleras</button><br />
                <button className="btn btn-secondary seccion">Otros</button><br />
            </div>
            <div className="pagination">
                <a href="#" className="active">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
            </div>
        </div>
    </div>
</div>

    )
}

export default Detalle;
