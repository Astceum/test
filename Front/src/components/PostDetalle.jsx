import "../css/detalle.css";

function PostDetalleImg({post}) {
  return (
    
    <figure>
    {post.image && (<img src={post.image.url} className="producto" id="producto-imagen" alt="Producto"/>)}
    </figure>

  )
}

export default PostDetalleImg