import React, { useState } from "react";
import './Form.css';
import emailjs from 'emailjs-com';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const enviar = (e) => {
        e.preventDefault();

        const serviceId = 'service_7p9vney';
        const templateId = 'template_3hvv7s7';
        const publicKey = 'h2f7HANeBzZB5gjJJ';

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'persona que lea este mensaje',
            message: message,
        }
        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((result) => {
                console.log(result.text);
                setName('');
                setEmail('');
                setMessage('');
                setSuccessMessage('Gracias por tu mensaje, te responderemos a la brevedad!');
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <form className="formulario" onSubmit={enviar}>
            <h4>Contacto</h4>
            <p>Dejanos tu consulta detallada.</p>
            <div className="row gy-3">
                <div className="col-md-12">
                    <input type="text" value={name} onChange={e => setName(e.target.value)} name="Nombre" className="form-control" placeholder="Nombre" required="" />
                </div>
                <div className="col-md-12 ">
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" name="email" placeholder="Email" required="" />
                </div>
                <div className="col-md-12">
                    <textarea className="form-control" value={message} onChange={e => setMessage(e.target.value)} name="mensaje" rows="6" placeholder="Mensaje" required=""></textarea>
                </div>
                <div id='productos'></div>
                <div className="col-md-12 text-center">
                    <div className="error-message"></div>
                    <button className='submit' type="submit">Enviar</button>
                </div>
            </div>
            {successMessage && <p className="mensajeExito">{successMessage}</p>}
        </form>
    )
}

export default Form;
