import React from 'react';
import './Card.css';

const Card = () => {
    return (
        <>
            <div className="card">
                <div className="content">
                    <span className="title">
                        Atención Gremial
                    </span>
                    <p className="desc">
                        Contamos con un departamento de obras para asesorar y acompañar a nuestros clientes en todo el proceso.
                    </p>
                    <a className="action" href="#">
                        contactanos
                        <span aria-hidden="true">
                            →
                        </span>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Card;
