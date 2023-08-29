import '../css/catalogo.css'
import Cards from './Cards'

import { usePosts } from "../context/PostContext";

function Catalogo() {
    const { posts } = usePosts();
    return (
        <div className="container-fluid">
            <div className='flex justify-center'>
            
                <div id="productos">
                    <div id="container">

                        <div className="flex flex-wrap items-center justify-center ">
                            {posts.map((post) => (
                            <Cards post={post} key={post._id} />
                            ))}
                        </div>
                    </div>
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
                        <a href="/catalogo">
                        <button className="seccion">Todos los productos</button><br /></a>
                        <a href="">
                        <button className="seccion">Accesorios</button><br /></a>
                        <a href="">
                        <button className="seccion">Cotillón</button><br /></a>
                        <a href="">
                        <button className="seccion">Decoración</button><br /></a>
                        <a href="">
                        <button className="seccion">Papelería</button><br /></a>
                        <a href="">
                        <button className="seccion">Recipientes</button><br /></a>
                        <a href="">
                        <button className="seccion">Vestimenta</button><br /></a>
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

export default Catalogo;