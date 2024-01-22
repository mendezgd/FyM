import React, { useState } from 'react';
import './Formulario.css';

function Formulario() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar el código para manejar los datos del formulario, como enviarlos a un servidor o mostrarlos en la consola.
        console.log(formData);
    };

    return (
        <div className='contacto'>
            <form className='form-container' onSubmit={handleSubmit}>
                <h2>Contacto</h2>
                <div className='form-group'>
                    <label htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="message">Mensaje:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button className='submit' type="submit">Enviar</button>
            </form>
            <div className='map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.5344518263637!2d-58.56380912426139!3d-34.56534097296811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb9e6bf36676f%3A0x35331b110b6ef282!2sAv.%20101%209%20de%20Julio%204136%2C%20Villa%20Ballester%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1699391493815!5m2!1ses-419!2sar"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
}

export default Formulario;
