import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "../pages/img/logo.png";

function NavbarAdmin() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-zinc-800 text-white py-4 px-10 items-center">
      <div className="grid gap-x-2 items-center grid-cols-3 gap-2">
        {isAuthenticated ? (
          <>
            <img src={logo} className="w-40" />
            <ul className="flex gap-5 items-center justify-center">
              <li>
                <Link to="/home">Catalogo</Link>
              </li>
              <li>
                <Link to="/company">Empresa</Link>
              </li>
              <li>
                <Link to="/slider">Carrusel</Link>
              </li>
            </ul>
            <div className="flex gap-6 justify-end items-center">
              <h3 className="text-md">Bienvenida Admin</h3>
              <div className="px-2 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-md">
                <Link
                  to="/login"
                  onClick={() => {
                    logout();
                  }}
                >
                  Logout
                </Link>
              </div>
            </div>
          </>
        ) : (
          <>
            <img src={logo} className="w-72" />
            {/* <li>
              <Link to="/login">Login</Link>
            </li> */}
          </>
        )}
      </div>
    </nav>
  );
}

export default NavbarAdmin;
