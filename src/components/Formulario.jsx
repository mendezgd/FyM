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
    };

    return (
        <div className='contacto' id='contacto'>
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
        </div>
    );
}

export default Formulario;
