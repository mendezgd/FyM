import React from "react";
import './Body.css';

const Body = () => {
    return (
        <div className="container" id="contacto">
            <div className="row justify-content-between gy-4">
                <div className="col-lg-6 d-flex align-items-center">
                    <div className="content">
                        <h3 className="cardTitle">Atencion al gremio</h3>
                        <h4 className="barrita2">-</h4>
                        <p>Contamos con un departamento de obras para asesorar y acompañar a nuestros clientes en todo el proceso.</p>
                    </div>
                </div>
                <div className="col-lg-5" >
                    <form className="formulario">
                        <h4>Contacto</h4>
                        <p>Dejanos tu consulta detallada.</p>
                        <div className="row gy-3">
                            <div className="col-md-12">
                                <input type="text" name="Nombre" className="form-control" placeholder="Nombre" required="" />
                            </div>
                            <div className="col-md-12 ">
                                <input type="email" className="form-control" name="email" placeholder="Email" required="" />
                            </div>
                            <div className="col-md-12">
                                <textarea className="form-control" name="mensaje" rows="6" placeholder="Mensaje" required=""></textarea>
                            </div>
                            <div className="col-md-12 text-center">
                                <div className="error-message"></div>
                                <button className='submit' type="submit">Enviar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Body;