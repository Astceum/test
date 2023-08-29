import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { usePosts } from "../context/PostContext";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import NavbarAdmin from "../components/NavbarAdmin";

function PostPage() {
  const { createPost, getPost, updatePost } = usePosts();
  const navigate = useNavigate();
  const params = useParams();
  const [post, setPost] = useState({
    title: "",
    description: "",
    /* price: "", */
    image: null,
  });

  useEffect(() => {
    (async () => {
      if (params.id) {
        const post = await getPost(params.id);
        setPost(post);
      }
    })();
  }, [params.id]);

  return (
    <div>
        <NavbarAdmin/>
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 text-white p-10 shadow-md shadow-black max-w-md w-full rounded-md">
        <header className="flex justify-between items-center py-4">
          <h3 className="text-xl">Nuevo Producto</h3>
          <Link to="/home" className="text-gray-400 text-sm hover:text-gray-300">
            Volver
          </Link>
        </header>

        <Formik
          initialValues={post}
          validationSchema={Yup.object({
            title: Yup.string().required("El Titulo es Requerido"),
            description: Yup.string().required("La Descripción es Requerida"),
            /* price: Yup.string(), */
          })}
          onSubmit={async (values, actions) => {
            if (params.id) {
              await updatePost(params.id, values);
            } else {
              await createPost(values);
            }

            actions.setSubmitting(false);
            navigate("/home");
          }}
          enableReinitialize
        >
          {({ handleSubmit, setFieldValue, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <label htmlFor="title" className="text-sm block font-bold ">
                Titulo
              </label>
              <Field
                name="title"
                placeholder="Titulo..."
                className="w-full px-3 py-2 focus:outline-none rounded bg-gray-600 mb-4"
              />
              <ErrorMessage
                component="p"
                name="title"
                className="text-red-400 text-sm "
              />

              {/* <label htmlFor="price" className="text.sm block font-bold ">
                Precio
              </label>
              <Field
                name="price"
                placeholder="Precio..."
                className=" w-full px-3 py-2 focus:outline-none rounded bg-gray-600 mb-4"
              /> */}

              <label htmlFor="description" className="text.sm block font-bold ">
                Descripción
              </label>
              <Field
                component="textarea"
                name="description"
                placeholder="Descripcion..."
                className="w-full px-3 py-2 focus:outline-none rounded bg-gray-600 mb-4"
                rows={3}
              />
              <ErrorMessage
                component="p"
                name="description"
                className="text-red-400 text-sm "
              />

              <label htmlFor="image" className="text.sm block font-bold ">
                Cargar Imagen
              </label>
              <input type="file" name="image" className="px-3 py-2 focus:outline-none 
              rounded bg-gray-600 w-full" 
              onChange={(e)=> setFieldValue('image', e.target.files[0])}
              />



              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 
                rounded mt-2 text-white focus:outline-none disabled:gb-indigo-400"
                disabled={isSubmitting}
              > {isSubmitting? (
                <AiOutlineLoading3Quarters className="animate-spin h-5 w-5"/>
                ) : "Enviar"}
                
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
    </div>
  );
}

export default PostPage;
