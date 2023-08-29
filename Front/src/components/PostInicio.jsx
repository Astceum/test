import React, {useRef, useEffect} from "react";
import "../css/inicio.css";
import { usePosts } from "../context/SliderHomeContext";
import { PostImgInicio } from "./PostImgInicio";



export function PostInicio() {

  const slideshow = useRef(null);

  const siguiente = () => {
      if (slideshow.current.children.length > 0) {
        console.log("nextt")
      const primerElemento = slideshow.current.children[0];
      slideshow.current.style.transition = `700ms ease-out all`;

      const tamañoSlide = slideshow.current.children[0].offsetWidth;

      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      const transicion = () => {
        slideshow.current.style.transition ='none';
      slideshow.current.style.transform = `translateX(0)`;

          slideshow.current.appendChild(primerElemento)

          slideshow.current.removeEventListener('transitionend', transicion);
      }

      slideshow.current.addEventListener('transitionend', transicion);
  }
}
  
  const anterior = () => {
    if(slideshow.current.children.length > 0){
			// Obtenemos el ultimo elemento del slideshow.
			const index = slideshow.current.children.length - 1;
			const ultimoElemento = slideshow.current.children[index];
			slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);

      slideshow.current.style.transition = 'none';
			const tamañoSlide = slideshow.current.children[0].offsetWidth;
			slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;
		
			setTimeout(() => {
				slideshow.current.style.transition = `700ms ease-out all`;
				slideshow.current.style.transform = `translateX(0)`;
			}, 30);
  }
}

useEffect(() => {
  setInterval(() => {
    siguiente();
  }, 5000);

 
}, []);

  const { posts } = usePosts();
  return (
    

  

    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          

          <div className="carousel-inner">
          <div className="carousel-item active">

          <div id="slide">
            <div id="contenedor" ref={slideshow}>
              
        {posts.map((post) => (
          <PostImgInicio post={post} key={post._id} />
        ))}
      
      </div>
      </div>
      </div>
            </div>
    

    {/* <div className="carousel-inner">
          <div className="carousel-item active" data-interval="10000">
            
          {posts && (<img src={post.image.url}/>)}
         
          </div>
            
    </div> */}

    <button next onClick={anterior} className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
    <button next onClick={siguiente} className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">next</span>
          </button>
        </div>
        
  )
}

export default PostInicio