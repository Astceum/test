import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../css/contacto.css";

function Contacto() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_c6mrytj', 'template_4p809k9', form.current, '_ePqjP4LpMNBAp7BQ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return ( 
        <div className="container-fluid">
            <div className="category-fluid">
                <div className="ubicacion-c">
                    <i className="icono fa-solid fa-location-dot fa-2xl" style={{ color: "#000000" }}></i>
                    <h3>UBICACIÓN</h3>
                    <p>Av. Brasil 7948, Renca</p>
                </div>
                <div className="correo">
                    <i className="icono fa-solid fa-envelope fa-2xl" style={{ color: "#000000" }}></i>
                    <h3>EMAIL</h3>
                    <p>magyprint7@gmail.com</p>
                </div>
                <div className="fono">
                    <i className="icono fa-brands fa-whatsapp fa-2xl" style={{ color: "#000000" }}></i>
                    <h3>TELÉFONO</h3>
                    <p>+569 62610425</p>
                </div>
            </div>
            <div className="grid-inferior-fluid">
                <div className="formulario">
                    <h2>CUÉNTANOS TU PROYECTO</h2>
                    <h5>Todos los campos marcados con un asterisco (*) son obligatorios <br />.</h5>
                    <form id="projectForm" ref={form} onSubmit={sendEmail}>

                        <div className="mb-3">
                            <label for="nombre" className="form-label">Nombre<span className="text-danger">*</span></label>
                            <input type="text" className="form-control rounded-4 " id="nombre" name="user_name" required />
                        </div>

                        <div className="mb-3">
                            <label for="email" className="form-label">Email<span className="text-danger">*</span></label>
                            <input type="email" className="form-control rounded-4" id="email" name="user_email" required />
                        </div>


                        <div className="mb-3">
                            <label for="telefono" className="form-label">Número de Teléfono</label>
                            <input type="tel" className="form-control rounded-4" id="telefono" name="telefono" />
                        </div>

                        <div className="mb-3">
                            <label for="servicio" className="form-label">Servicio</label>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="Bordado" id="opcion1"
                                    name="servicio[]" />
                                <label className="form-check-label" for="opcion1">Bordado</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="Impresión Directa(DTG)" id="opcion2"
                                    name="servicio[]" />
                                <label className="form-check-label" for="opcion2">Impresión Directa(DTG)</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="Estampado Vinilo" id="opcion3"
                                    name="servicio[]" />
                                <label className="form-check-label" for="opcion3">Estampado Vinilo</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="Estampado DTF" id="opcion4"
                                    name="servicio[]" />
                                <label className="form-check-label" for="opcion4">Estampado DTF</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="Impresión Digital" id="opcion5"
                                    name="servicio[]" />
                                <label className="form-check-label" for="opcion5">Impresión Digital</label>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label for="mensaje" className="form-label">Mensaje<span className="text-danger">*</span></label>
                            <textarea className="form-control no-resize rounded-4" id="mensaje" name="message" rows="4"
                                required></textarea>
                        </div>

                        <button type="submit" className="bg-[#3fa09b] hover:bg-[#177571] px-4 py-2 rounded mt-2 text-white focus:outline-none disabled:gb-indigo-400" value="Send">Enviar</button>
                    </form>
                </div>
                <div className="hor-ubi">
                    <div className="horario">
                        <i className="icono fa-solid fa-clock fa-2xl relojicon" style={{ color: "#000000" }}></i>
                        <h3>HORARIO DE ATENCIÓN</h3>
                        <p>Lunes a Viernes 9:00 AM a 18:00 PM <br /> Sábados y Domingos Cerrado</p>
                    </div>
                    <div className="mapa"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.9664994392924!2d-70.7534189234061!3d-33.398038194831564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c16d39b5066d%3A0xc983b693fca7d344!2sAv.%20Brasil%207948%2C%208661078%20Renca%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1692297131932!5m2!1ses-419!2scl" width="100%" height="550" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
                </div>
            </div>
        </div>
    );
}

export default Contacto;