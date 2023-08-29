import { usePosts } from "../context/PostContext";
import { VscEmptyWindow } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { PostCard } from "../components/PostCard";
import NavbarAdmin from "../components/NavbarAdmin";

export function HomePage() {
  const { posts } = usePosts();

  if (posts.length === 0)
    return (
      <div>
        <NavbarAdmin/>
      
      <div className="text-white flex flex-col justify-center items-center">
        <VscEmptyWindow className="w-48 h-48" />
        <h1 className="mb-12">No hay Publicaciones aun</h1>
        <Link to="/post" className="px-2 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-md">Crear Nueva Publicacion</Link>
      </div>
      </div>
    );

  return (
    <div>
        <NavbarAdmin/>
    <div className="text-white px-10 container m-auto">
      <header className="flex justify-between py-4">
        <h1 className="text-2xl font-bold">Catalogo Post ({posts.length})</h1>

        <Link to="/post" className="px-2 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-md">Crear Nueva Publicacion</Link>
      </header>
      <div className="grid grid-cols-3 gap-2">
        {posts.map((post) => (
          <PostCard post={post} key={post._id} />
        ))}
      </div>
    </div>
    </div>
  );
}

export default HomePage;
