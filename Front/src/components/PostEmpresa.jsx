import "../css/empresa.css"

export function PostEmpresa({post}) {
  return (
    <div>      
        <div id="cards">
            <figure>
            {post.image && (<img src={post.image.url} />)}
            </figure>
            <div id="contenido">
              <h2>{post.title}</h2>
              <h5>{post.description}</h5>
              <a href="#">Cotizar</a>
            </div>
        </div>
    </div>
  )
}

export default PostEmpresa