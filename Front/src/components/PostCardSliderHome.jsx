import toast from "react-hot-toast";
import { usePosts } from "../context/SliderHomeContext";
import { useNavigate } from "react-router-dom";

export function PostCardSliderHome({ post }) {

  const { deletePost } = usePosts();
    const navigate = useNavigate();
    

    const handelDelete = (id) => {
        toast((t) =>(
            <div className=" text-black text-center p-2">
                <p className="m-4">Esta seguro que quiere Eliminar? <strong>{post.image && (<img src={post.image.url}/>)}</strong></p>
                <div>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4  rounded-sm mx-2" onClick={() =>{ deletePost(id); toast.dismiss(t.id);}}>
                        Aceptar
                    </button>
                    <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-sm mx-2" onClick={() => toast.dismiss(t.id)}>
                        Cancelar
                    </button>
                </div>
            </div>
        ))
    }

  return (
    <div className="bg-zinc-800 rounded-sm shadow-md shadow-black hover:bg-zinc-700 hover:cursor-pointer"
    onClick={() => navigate(`/post-slider/${post._id}`)}
    >
      <div className="px-4 py-7">
        <div className="flex justify-between">
        
          <h3>{post.title}</h3>
          <button className="bg-red-600 hover:bg-red-500 text-sm px-2 py-1 rounded-sm mb-6"
            onClick={(e) => {
              e.stopPropagation();
              handelDelete(post._id)}}
              >
            Eliminar
          </button>
        </div>
        <p>{post.description}</p>
        <div>
          {post.image && (<img src={post.image.url} className="object-cover h-full w-auto"/>)}
        </div>        
      </div>
    </div>
  )
}

export default PostCardSliderHome