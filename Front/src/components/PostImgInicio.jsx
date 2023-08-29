import "../css/inicio.css";

export function PostImgInicio({post}) {
  return (
   
            
    <div id="style">
    {post.image && (<img src={post.image.url}/>)}
  </div> 
         
       
  )
}

export default PostImgInicio