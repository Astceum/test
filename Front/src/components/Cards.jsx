
import "../css/empresa.css";

import toast from "react-hot-toast";


function Cards ({post}) {
    const handelGet = () => {
        toast((t) =>(
            <div className=" text-black text-center p-2">
                <div>
                <strong>{post.image && (<img src={post.image.url}/>)}</strong>
                <h2>{post.title}</h2>
                <h5>{post.description}</h5>
                <p className="m-4"></p>
                <div className="bg-[#3fa09b] hover:bg-[#177571] text-white text-sm mb-6 font-bold py-2 px-4  rounded-sm mx-2">
                <a href="https://api.whatsapp.com/send/?phone=%2B56951386716&text=Hola%2C+necesito+informaci%C3%B3n+de+sus+productos&type=phone_number&app_absent=0">Cotizar</a>
                </div>
                </div>
            </div>
        ))
    }
    


    return (  
        <div onClick={(e) => {
            e.stopPropagation();
            handelGet(post._id)}}
    >
        <div>      
        <div id="cards">
            <figure>
            {post.image && (<img src={post.image.url} />)}
            </figure>
            <div id="contenido">
              <h2>{post.title}</h2>
              {/* <h5>{post.description}</h5> */}
              <a href="https://api.whatsapp.com/send/?phone=%2B56951386716&text=Hola%2C+necesito+informaci%C3%B3n+de+sus+productos&type=phone_number&app_absent=0">Cotizar</a>
            </div>
        </div>
    </div>
    </div>
    );
} 


export default Cards;