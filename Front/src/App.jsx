import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { PostsProvider } from "./context/PostContext";
import { PostsCompanyProvider } from "./context/CompanyContext";
import { PostsSliderHomeProvider } from "./context/SliderHomeContext";
import { Toaster } from "react-hot-toast";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import PostPage from "./pages/PostPage";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import PostCompanyPage from "./pages/PostCompanyPage";
import HomeCompanyPage from "./pages/HomeCompanyPage";
import HomeSliderHomePage from "./pages/HomeSliderHomePage";
import PostSliderHome from "./pages/PostSliderHome";
import InicioPage from "./pages/InicioPage";
import EmpresaPage from "./pages/EmpresaPage";
import NosotrosPage from "./pages/NosotrosPage";
import ContactoPage from "./pages/ContactoPage";
import CatalogoPage from "./pages/CatalogoPage";
import DetallePage from "./pages/DetallePage";

import ProtectedRoute from "./ProtectedRoute";


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <PostsProvider>
        <PostsCompanyProvider>
          <PostsSliderHomeProvider>
          <Routes>

              <Route path="/" element={<InicioPage />} />
              <Route path="/empresa" element={<EmpresaPage />} />
              <Route path="/catalogo" element={<CatalogoPage />} />
              <Route path="/detalle/:id" element={<DetallePage />} />

              <Route path="/nosotros" element={<NosotrosPage />} />
              <Route path="/contacto" element={<ContactoPage />} />

              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />


            <Route element={<ProtectedRoute />}>
              <Route path="/home" element={<HomePage />} />
              <Route path="/post" element={<PostPage />} />
              <Route path="/post/:id" element={<PostPage />} />

              <Route path="/company" element={<HomeCompanyPage />} />
              <Route path="/post-company" element={<PostCompanyPage />} />
              <Route path="/post-company/:id" element={<PostCompanyPage />} />

              <Route path="/slider" element={<HomeSliderHomePage />} />
              <Route path="/post-slider" element={<PostSliderHome />} />
              <Route path="/post-slider/:id" element={<PostSliderHome />} />

              
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
          <Toaster />
          </PostsSliderHomeProvider>
          </PostsCompanyProvider>
        </PostsProvider>
      </BrowserRouter>
    </AuthProvider>
    
  ); 
}

export default App;
