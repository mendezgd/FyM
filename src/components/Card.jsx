import React from 'react';
import './Card.css';

const Card = () => {
    return (
        <>
            <div className="cards_item">
                <div className="card">
                    <div className="card_image">
                        <img src="/atencion.jpeg" alt="atencion personalizada" />
                    </div>
                    <div className="card_content">
                        <h2 className="card_title">Atención Gremial</h2>
                        <div className="card_text">
                            <p>Contamos con un departamento de obras para asesorar y acompañar a nuestros clientes en todo el proceso.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
