import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavbarAdmin from "../components/NavbarAdmin";



function RegisterPage() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) navigate("/login")
  }, [isAuthenticated])


  const onSubmit = handleSubmit(async (value) => {
    signup(value);
  })

  return (
    <div>
        <NavbarAdmin/>
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-white max-w-md p-10 rounded-md ">
        <h1 className="text-2xl font-bold max-w-md p-9 text-center text-zinc-900">Registro</h1>
        {
          registerErrors.map((error, i) => (
            <div className="bg-red-500 p-2 text-white" key={i}>
              {error}
            </div>
          ))
        }

        <form onSubmit={onSubmit}>



          <input type="text" {...register("name", { required: true })}
            className="w-full bg-zinc-200 text-zinc-900 px-4 py-2 rounded-md my-2"
            placeholder="Nombre..."
          />
          {errors.name && (
            <p className="text-red-500">El Nombre es Requerido</p>
          )}

          <input type="email" {...register("email", { required: true })}
            className="w-full bg-zinc-200 text-zinc-900 px-4 py-2 rounded-md my-2"
            placeholder="Correo..."
          />
          {errors.email && (
            <p className="text-red-500">El Correo es Requerido</p>
          )}

          <input type="password" {...register("password", { required: true })}
            className="w-full bg-zinc-200 text-zinc-900 px-4 py-2 rounded-md my-2"
            placeholder="Contraseña..."
          />
          {errors.password && (
            <p className="text-red-500">La Contraseña es Requerido</p>
          )}

          <button type="submit" className="text-zinc-900 px-4">
            Registrar
          </button>

        </form>


      </div>
    </div>
    </div>
  )
}

export default RegisterPage