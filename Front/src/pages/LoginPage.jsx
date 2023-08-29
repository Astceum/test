import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavbarAdmin from "../components/NavbarAdmin";



function LoginPage() {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const { signin, errors: signinErrors, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  const onSubmit = handleSubmit(data => {
    signin(data)
  })

  useEffect(() => {
    if (isAuthenticated) navigate("/home")
  }, [isAuthenticated])

  return (
    <div>
        <NavbarAdmin/>
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 text-white max-w-md w-full p-10 rounded-md">
        {signinErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white text-center" key={i}>
            {error}
          </div>
        ))}

        <h1 className="text-2xl font-bold  text-zinc-100">Login</h1>

        <form onSubmit={onSubmit}>

          <input type="text" {...register("name", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Nombre..."
          />
          {errors.name && (
            <p className="text-red-500">El Nombre es Requerido</p>
          )}

          <input type="password" {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Contraseña..."
          />
          {errors.password && (
            <p className="text-red-500">La Contraseña es Requerido</p>
          )}

          <button type="submit" className="px-2 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-md">
            Ingresar
          </button>

        </form>
      </div>
    </div>
    </div>
  )
}

export default LoginPage